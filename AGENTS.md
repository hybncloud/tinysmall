## 统一事件通信机制

```
子组件（发送端）:  parentVm.$emitter.emit(内部事件名, args)    ← 纯总线，不触发父级 instance.emit
父组件（接收端）:  vm.$on(内部事件名, handler)                 ← handler 决定后续行为
                   └─ 需要对外时: emit(公共事件名, ...)         ← 公共事件名 ≠ 内部事件名
```

要点：

1. **发送端只走 `$emitter.emit`**，禁止直接调用父级的 `vm.$emit`。
   `$emit` 是双通道（`instance.emit` + `$emitter.emit`），直接调用会把内部事件泄漏成父组件的公共事件，并对未声明的 emit 触发 Vue dev 警告。
2. **公共事件名与内部事件名必须不同**。
   若 handler 里用 `vm.$emit`（双通道）转发同名事件，会重入总线触发自身订阅 → 无限循环；不同名从约定上杜绝此问题。
3. **父级对外触发用 setup 级 `emit`**（renderless 的 `emit` 参数，仅 `instance.emit`、不回总线）。
   因此个别公共名固定的场景（如 v-model 的 `update:modelValue`）即使与内部名相同也不会重入循环。
4. **`provide` 的必须是 TinyVM**（renderless 的 `vm`），不能用公共代理 `this`——代理的 `$emit` 不经过 `$emitter`，总线上收不到。
5. **实参一律直发单值（对象或原始值），禁止用数组包装业务值**。
   `vm.$on` 处理器按单实参书写（如 `(value) => ...`）；shim 中遗留的 `Array.isArray(params) ? params : [params]` 展开仅为兼容旧调用点的数组写法，且目标处理器（`form.change`/`form.blur`）不消费值，勿在新代码中依赖该行为。
