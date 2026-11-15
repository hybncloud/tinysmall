export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法'
      },
      desc: {
        'zh-CN': `
          通过 <code>data</code> 属性设置数据源，默认通过数据项的 <code>label</code> , <code>children</code> 属性展示数据。<br>
          通过 <code>show-line</code> 属性设置是否显示连接线。<br>
          通过 <code>size</code> 属性设置组件的大小，可选值为<code>medium</code> , <code>small</code>。<br>
          通过 <code>indent</code> 属性设置每一级的水平缩进，默认 18px。<br>
          通过 <code>node-click</code> 事件，监听节点的点击。<br>
          `
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'props',
      name: {
        'zh-CN': '数据格式 / 禁用'
      },
      desc: {
        'zh-CN': `
          通过 <code>props</code> 属性，指定 <code>label / children / disabled / isLeaf</code> 映射关系，以支持用户传入非标准格式的数据到<code> data </code>属性。<br>
           <code>disabled</code> 指定节点的禁用状态。<br>
           <code>isLeaf</code> 指定节点是否为叶子节点，仅在懒加载时有效。<br>
           `
      },
      codeFiles: ['props.vue']
    },
    {
      demoId: 'icons',
      name: {
        'zh-CN': '自定义图标'
      },
      desc: {
        'zh-CN': `
          通过 <code>icon</code> 属性设置组件的图标。<br>
          通过 <code>expandIcon</code> 属性设置组件的打开图标，<code>expandIconColor</code> 属性设置打开图标颜色。<br>
          通过 <code>shrinkIcon</code> 属性设置组件的收起图标，<code>shrinkIconColor</code> 属性设置收起图标颜色。<br>
          <div class="tip custom-block">
            <code>expandIcon</code>,<code>shrinkIcon</code> 2 个属性的优先级更高。
          </div>
          `
      },
      codeFiles: ['icons.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '自定义节点 / 插槽'
      },
      desc: {
        'zh-CN': `
           <code>default </code> 插槽，节点内容元素，默认为节点数据的 <code>label</code> 值。<br>
           <code>prefix</code> 插槽，节点内容前置元素。<br>
           <code>suffix</code> 插槽，节点内容后置元素。<br>
           <code>operation</code> 插槽，节点内容靠右对齐的元素，当启用<a href="#edit">编辑</a>时，它显示在编辑按钮的左边。<br>
           <code>empty</code> 插槽，传入的 <code>data</code> 属性为空时，自定义无数据的元素。<br><br>
           除以上 5 个插槽外，组件还提供了 2 个自定义节点的属性：<br>
           通过 <code>emptyText</code> 属性，指定无数据时文本提示。<br>
           通过 <code>render-content</code> 函数属性，自定义渲染函数，可使用 JSX 返回需要渲染的节点内容。<br>
           `
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'node-hl',
      name: {
        'zh-CN': '节点的高亮 / 查询'
      },
      desc: {
        'zh-CN': `
          通过 <code> node-key </code> 属性，指定节点的唯一标识，节点的高亮与查询，都必须设置节点的唯一标识。<br>
          通过 <code> highlight-current </code> 属性，是否启用节点高亮的功能，默认值为<code> true </code>。<br>
          通过 <code> current-node-key </code> 属性，设置当前高亮的节点。<br>
          通过 <code> current-change </code> 事件，监听选择节点的动作。<br>
          <div class="tip custom-block">
            <p class="custom-block-title"> 实用技巧 </p>
            节点数据：传入的节点数据。<br>
            节点对象：组件内节点对象。<br>
            节点路径：从根节点开始，由节点数据组成的数组。<br><br>
            通过节点对象，可以取到当前节点的 <code> parent、childNodes、nextSibling、previousSibling </code> 等属性，从而实现节点间的自由访问，也可以调用它的内部函数，进行节点展开/收起，节点编辑/勾选等操作。
          </div>
          通过 <code> getCurrentNode、getCurrentKey、getNode、getNodeKey、getNodePath </code> 等组件函数，查询以上节点的信息。<br>
          通过 <code> setCurrentKey、setCurrentNode </code> 等组件函数，手动设置高亮节点。<br>
          `
      },
      codeFiles: ['node-hl.vue']
    },
    {
      demoId: 'expand-control',
      name: {
        'zh-CN': '节点的展开控制'
      },
      desc: {
        'zh-CN': `
          通过 <code> default-expand-all </code> 属性，加载时默认展开所有节点，默认为 <code>false</code>。<br>
          通过 <code> default-expanded-keys </code> 属性，加载时默认展开指定数组里的节点，需要指定<code>node-key</code>的值。<br>
          通过 <code> expand-on-click-node </code> 属性，设置节点在点击内容时展开 / 收起，默认为 <code>true</code>。当设置为 <code>false</code>时，只有点击图标才展开。<br>
          通过 <code> expandAllNodes </code> 组件方法，可以全部展开或收起所有节点。函数入参为 <code>true</code>时全部展开，反之则全部收起。<br>
          通过 <code> node-expand </code> 事件，监听节点展开的动作。<br>
          通过 <code> node-collapse </code> 事件，监听节点收起的动作。<br>
          <div class="tip custom-block">
            <p class="custom-block-title"> 实用技巧 </p>
            节点对象上包含<code>expand</code> 和 <code>collapse</code> 方法，可以展开或收起该节点。<br>
          </div>
          `
      },
      codeFiles: ['expand-control.vue']
    },
    {
      demoId: 'node-op',
      name: {
        'zh-CN': '节点的增删改'
      },
      desc: {
        'zh-CN': `
          通过 <code> insertBefore </code> 组件方法，在当前节点前增加一个节点。<br>
          通过 <code> insertAfter </code> 组件方法，在当前节点后增加一个节点。<br>
          通过 <code> append </code> 组件方法，追加一个节点到当前节点的子节点的顶部。<br>
          通过 <code> updateKeyChildren </code> 组件方法，更新当前节点的子节点，原有的子节点会丢失。<br>
          通过 <code> remove </code> 组件方法，删除当前节点。如果要保留该节点的所有子节点，则传递参数：isSaveChildNode=true，详见 <a href=\'#API\'>API 说明</a>。 <br>
          <div class="tip custom-block">
            <p class="custom-block-title"> 实用技巧 </p>
            当更新子节点，且需要保留子节点时，请先使用<code> getNode </code> 查询到当前节点的<code> children </code>，修改它后再调用<code> updateKeyChildren </code> 更新子节点。<br><br>
            除了使用组件实例进行节点操作之外，还可以通过节点对象的 <code> insert </code> 、<code> remove </code> 等相关方法，操作节点。
          </div>
          `
      },
      codeFiles: ['node-op.vue']
    },
    {
      demoId: 'checkbox',
      name: {
        'zh-CN': '多选模式'
      },
      desc: {
        'zh-CN': `
          通过 <code> show-checkbox </code> 属性，启用多选模式。<br>
          通过 <code> check-strictly </code> 属性，指定是否严格模式。属性默认为 <code> false </code>。严格模式时勾选父节点，子节点自动全选中；子节点全选中，自动勾选父节点。<br>
          通过 <code>  check-on-click-node </code> 属性，点击节点时，同时进行勾选/反勾选节点。属性默认值为 <code> false </code>, 即点击节点不自动勾选。<br>
          通过 <code> default-checked-keys  </code> 属性，设置默认加载时，自动勾选的节点的 keys 数组。<br>
          <div class="tip custom-block">
            严格模式下父子不相互影响，勾选父节点时不会自动勾选子节点，适用于某些特殊场景。
          </div>
          `
      },
      codeFiles: ['checkbox.vue']
    },
    {
      demoId: 'check-op',
      name: {
        'zh-CN': '多选的查询 / 勾选'
      },
      desc: {
        'zh-CN': `
          通过 <code> getCheckedKeys、getCheckedNodes、getHalfCheckedKeys、getHalfCheckedNodes </code> 组件函数，查询当前组件的勾选状态。<br>
          通过 <code> setChecked、setCheckedByNodeKey、setCheckedKeys、setCheckedNodes </code> 组件函数，手动勾选组件的指定节点。<br>
          <div class="tip custom-block">
          <code> setChecked </code> 勾选时，可以深度递归勾选 (deep:true)，也可以只勾选某节点。<br>
          建议使用 <code> setCheckedKeys </code>进行勾选，保证父子联动状态统一，详见下面例子。
          </div>
          通过 <code> check </code> 事件，监听组件的勾选事件。<br>
          通过 <code> check-change </code> 事件，监听节点状态变化的回调。<br>
          <div class="tip custom-block">
            <code> check </code> 事件触发在点击的元素上，事件参数为：被点击的节点和勾选后组件的整体勾选状态。<br>
            <code> check-change </code> 事件是发生在每一个发生勾选状态变化的节点，事件参数为：状态变化的节点和该节点当前的<code>checked 值</code>和<code>indeterminate 值</code>。<br><br>
            通常一次勾选动作会触发多个节点的状态变化。
          </div>
          <div class="tip custom-block">
            <p class="custom-block-title"> 实用技巧 </p>
            除了使用组件实例进行勾选操作之外，还可以通过节点对象的 <code> setChecked </code> 进行勾选。
          </div>
          `
      },
      codeFiles: ['check-op.vue']
    },
    {
      demoId: 'radio',
      name: {
        'zh-CN': '单选模式'
      },
      desc: {
        'zh-CN': `
          通过 <code> show-radio </code> 属性启用单选模式。<br>
          通过 <code> default-checked-keys、check-change </code> 等属性和事件，在单选模式下用法不变。<br>
          通过 <code> setCurrentRadio </code> 组件函数，设置<code> default-checked-keys  </code> 的第一项为勾选值，详见下面例子。<br>
          <div class="tip custom-block">
            建议尽量不使用单选模式
          </div>
          `
      },
      codeFiles: ['radio.vue']
    },
    {
      demoId: 'filter-view',
      name: {
        'zh-CN': '节点过滤与视图'
      },
      desc: {
        'zh-CN': `
          通过 <code> filter-node-method </code> 属性，指定过滤节点时的函数，函数返回<code>true</code>时节点显示，否则节点隐藏。<br>
          通过 <code> filter </code> 组件方法，触发组件进行过滤。<br>
          通过 <code> highlightQuery </code> 属性，是否在匹配的节点中，高亮搜索文字。<br>
          通过 <code> view-type </code> 属性，设置组件的视图模式，可选值为<code> tree </code> 和 <code> plain </code>,默认为<code> tree </code>。<br>
          通过 <code> show-auxi </code> 属性，设置在平铺视图时，是否显示节点的辅助信息，默认为<code>true</code>。<br>
          <div class="tip custom-block">
            平铺视图多用于过滤场景等<br>
            平铺视图支持 <code> default、prefix、suffix </code> 三个插槽，实现自定义节点，参见<a href="#slot"> 插槽示例 </a>
          </div>
          `
      },
      codeFiles: ['filter-view.vue']
    },
    {
      demoId: 'lazy',
      name: {
        'zh-CN': '懒加载'
      },
      desc: {
        'zh-CN': `
          通过 <code> lazy </code> 属性，启用懒加载模式。<br>
          通过 <code> load </code> 函数属性，触发加载，初始会执行一次。<br>
          通过 <code> props.isLeaf </code> 属性，指定返回数据体的节点是否为叶子节点，叶子节点点击后不再触发<code> load </code>函数。<br>
          通过 <code> afterLoad </code> 函数属性 或者  <code> load-data </code> 事件，监听下级节点加载完毕的事件，它们完全等效。<br>
          <div class="tip custom-block">
            懒加载模式下，<code> data </code> 属性无效
          </div>
          `
      },
      codeFiles: ['lazy.vue']
    },
    {
      demoId: 'drag',
      name: {
        'zh-CN': '拖拽节点'
      },
      desc: {
        'zh-CN': `
          通过 <code> draggable </code> 属性，启用拖拽功能。<br>
          通过 <code> allow-drag </code> 函数属性，判断目标节点能否拖拽，返回<code>false</code>时，不能拖拽。<br>
          通过 <code> allow-drop </code> 函数属性，判断目标节点能否被放置，函数入参为：<code>源节点、目标节点、释放位置</code>，函数返回<code>false</code>时，不能释放。<br>
          <div class="tip custom-block">
            释放位置可选值为<code>'prev'、'inner' 和 'next'</code>，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后。<br>
          </div>
          通过 <code> node-drop </code> 事件，监听拖拽成功后触发的事件。<br>
          通过 <code> node-drag-start、node-drag-enter、node-drag-over、node-drag-leave、node-drag-end </code> 等事件，监听拖拽过程中触发的事件。<br>
          <div class="tip custom-block">
            事件<code> node-drop、node-drag-end</code> 的释放类型参数，可选值为： <code>'before'/'after'/'inner'/'none'</code>。<br><br>
            拖拽过程中的事件触发频率高，请考虑使用事件节流函数。
          </div>
          `
      },
      codeFiles: ['drag.vue']
    },
    {
      demoId: 'edit',
      name: {
        'zh-CN': '编辑节点'
      },
      desc: {
        'zh-CN': `
          通过调用实例的<code> openEdit </code>方法来进入编辑，<code> closeEdit </code>方法取消编辑，<code> saveEdit </code>方法保存编辑。<br>
          通过调用实例的<code> addNode(node) </code>方法为 node 节点添加一个子节点，并立即进入编辑模式。<br>
          通过调用实例的<code> editNode(node) </code>方法，立即编辑 node 节点。<br>
          通过调用实例的<code> saveNode() </code>方法，保存正在编辑的节点。<br>
          <div class="tip custom-block">
            在使用编辑功能时，不要使用 <code> props </code> 去定义数据列的映射关系，要使用默认的数据格式。<br>
            数据项的禁用并不影响数据的编辑功能，编辑功能的控制，请参考 <code> 编辑权限 </code> 的示例。
          </div>
          通过<code> edit-config </code> 属性，设置编辑模式下参数配置。<br>
        `
      },
      codeFiles: ['edit.vue']
    },
    {
      demoId: 'edit-control',
      name: {
        'zh-CN': '编辑权限和事件'
      },
      desc: {
        'zh-CN': `
          通过<code> add-disabled-keys </code> 属性，禁止添加的节点 key 值列表，也可通过 <code> setAddDisabledKeys </code>方法设置；<br>
          通过<code> edit-disabled-keys </code> 属性，禁止编辑的节点 key 值列表，也可通过 <code> setEditDisabledKeys </code>方法设置；<br>
          通过<code> delete-disabled-keys </code> 属性，禁止删除的节点 key 值列表，也可通过 <code> setDeleteDisabledKeys </code>方法设置；<br>
          通过<code> delete-node-method </code> 函数属性，开启自定义删除节点的处理方法，若返回 false 或者返回 Promise 且被 reject，则停止删除。<br>
          组件会触发一组编辑事件，用于监听编辑过程中的各个阶段： <code> open-edit、close-edit、save-edit、add-node、edit-node、delete-node </code> 。
          `
      },
      codeFiles: ['edit-control.vue']
    },
    {
      demoId: 'contextmenu',
      name: {
        'zh-CN': '右键菜单'
      },
      desc: {
        'zh-CN': `
          通过 <code> show-contextmenu </code> 属性，启用右键菜单功能。<br>
          通过 <code> contextmenu </code> 插槽，自定义右键菜单的元素。<br>
          通过 <code> closeMenu </code> 方法，关闭右键菜单的元素。<br>
          通过 <code> node-contextmenu </code> 事件，监听用户右键点击节点的事件。<br>
          `
      },
      codeFiles: ['contextmenu.vue']
    },
    {
      demoId: 'other',
      name: {
        'zh-CN': '其它特性'
      },
      desc: {
        'zh-CN': `
          树组件默认开启快捷键功能，可通过键盘的 ↑， ↓ （上下箭头）上下移动选中节点， ←，→（左右箭头）收缩展开节点，Enter、Space 控制节点复选按钮的勾选<br>
          通过 <code> accordion </code> 属性，启用手风琴模式，每次展开节点时，自动关闭其它已打开的节点，默认值为<code> false </code>。<br>
          通过 <code> icon-trigger-click-node </code> 属性，指定点击图标，是否触发点击的行为，默认值为<code> true </code>。<br>
          通过 <code> render-after-expand </code> 属性，是否在展开节点时，才渲染下级节点，默认值为<code> true </code>。<br>
          通过 <code> show-check-easily </code> 属性，在严格模式时，是否勾选父节点时，自动勾选子节点，<code> false </code>。<br>
          通过 <code> switch-text </code> 插槽自定义开关右侧的内容。<br>
          `
      },
      codeFiles: ['other.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '支持基本的树形结构展示功能。',
      cloud: {
        value: true
      },
      apis: ['data'],
      demos: ['basic-usage']
    },
    {
      id: 'selection',
      name: '选择功能',
      support: {
        value: true
      },
      description: '支持单选和多选功能。',
      cloud: {
        value: true
      },
      apis: ['show-checkbox', 'multiple'],
      demos: ['selection']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '支持禁用整个树或单个节点。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['disabled']
    },
    {
      id: 'expand',
      name: '展开控制',
      support: {
        value: true
      },
      description: '支持控制节点的展开和收起状态。',
      cloud: {
        value: true
      },
      apis: ['expand-on-click-node', 'default-expand-all'],
      demos: ['expand']
    },
    {
      id: 'customization',
      name: '自定义内容',
      support: {
        value: true
      },
      description: '支持自定义节点内容和图标。',
      cloud: {
        value: true
      },
      apis: ['render-content', 'icon'],
      demos: ['custom-content']
    }
  ]
}
