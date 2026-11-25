renderless 架构不再使用，现在只是个形式

js、jsx、ts、tsx文件采用小驼峰命名
js class采用大驼峰命名
js function，js variable，js property采用小驼峰命名

按标准组件组织重构

```
src/components/xxx/
  index.ts
  src/index.ts
  src/pc.vue
src/renderless/src/xxx/
  index.ts
  vue.ts
src/renderless/types/xxx.type.ts
theme/src/xxx/index.less
```
