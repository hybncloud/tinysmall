export default {
  mode: ['pc'],
  apis: [
    {
      name: 'transfer',
      type: 'component',
      props: [
        {
          name: 'button-texts',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '通过传入一个2值的字符串数组，自定义左右穿梭按钮的文案'
          },
          mode: ['pc'],
          pcDemo: 'custom-btns'
        },
        {
          name: 'data',
          type: 'ITransferData[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '左右列表的全量数据源'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'drop-config',
          typeAnchorName: 'IDropConfig',
          type: 'IDropConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '设置穿梭框列表项可拖拽的参数，参见sortablejs插件'
          },
          mode: ['pc'],
          pcDemo: 'drop-config'
        },
        {
          name: 'filter-method',
          type: '(query:string, item:object) => boolean',
          defaultValue: '',
          desc: {
            'zh-CN':
              '\n              设置穿梭框的搜索过滤函数，仅在默认列表时有效<br>\n              嵌套树时，请使用treeConfig进行搜索配置<br>\n            '
          },
          mode: ['pc'],
          pcDemo: 'custom-filter'
        },
        {
          name: 'filter-placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '启用搜索时，搜索框占位文本'
          },
          mode: ['pc'],
          pcDemo: 'custom-filter'
        },
        {
          name: 'filterable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用搜索的功能'
          },
          mode: ['pc'],
          pcDemo: 'custom-filter'
        },
        {
          name: 'format',
          type: 'object',
          defaultValue:
            // eslint-disable-next-line no-template-curly-in-string
            "{ <br>&nbsp;&nbsp; noChecked:'${checked}/${total}', <br>&nbsp;&nbsp; hasChecked: '${checked}/${total}' <br>}",
          desc: {
            'zh-CN': '列表顶部勾选状态文案'
          },
          mode: ['pc'],
          pcDemo: 'custom-titles'
        },
        {
          name: 'left-default-checked',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '默认左侧列表的已勾选项的 key 数组'
          },
          mode: ['pc'],
          pcDemo: 'default-checked'
        },
        {
          name: 'props',
          type: '{key:string, label:string, disabled:string}',
          defaultValue: '',
          desc: {
            'zh-CN': '数据源的字段别名映射配置'
          },
          mode: ['pc'],
          pcDemo: 'custom-render'
        },
        {
          name: 'render',
          type: 'Tree',
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置左右区域的渲染类型,Tree 对象需要从组件包中引入相应的组件变量。<br>该属性值的 plugin 设置为Tree渲染为树'
          },
          mode: ['pc'],
          pcDemo: 'nested-tree'
        },
        {
          name: 'render-content',
          type: '(h: Vue.h, item: any) => vnode',
          defaultValue: '',
          desc: {
            'zh-CN': '数据项的自定义渲染函数'
          },
          mode: ['pc'],
          pcDemo: 'custom-render'
        },
        {
          name: 'right-default-checked',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '默认右侧列表的已勾选项的 key 数组'
          },
          mode: ['pc'],
          pcDemo: 'default-checked'
        },
        {
          name: 'show-all-btn',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示全部移动按钮'
          },
          mode: ['pc'],
          pcDemo: 'custom-btns'
        },
        {
          name: 'target-order',
          type: '"original" / "push" / "unshift"',
          defaultValue: '"original"',
          desc: {
            'zh-CN':
              ' 右侧列表元素的插入排序策略<br>\n                &nbsp; 若为 original，则保持与数据源相同的顺序 <br>\n                &nbsp; 若为 push，则新加入的元素排在最后 <br>\n                &nbsp; 若为 unshift，则新加入的元素排在最前。'
          },
          mode: ['pc'],
          pcDemo: 'target-order'
        },
        {
          name: 'titles',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN':
              '自定义列表的标题；不设置titles时，左右列表的标题默认显示为： <code> 列表 1</code>，<code> 列表 2</code>'
          },
          mode: ['pc'],
          pcDemo: 'custom-titles'
        },
        {
          name: 'to-left-disable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '组件初始化状态下未选中时，默认按钮显示禁用状态'
          },
          mode: ['pc'],
          pcDemo: 'custom-btns'
        },
        {
          name: 'to-right-disable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '组件初始化状态下未选中时，默认按钮显示禁用状态'
          },
          mode: ['pc'],
          pcDemo: 'custom-btns'
        },
        {
          name: 'tree-op',
          linkTo: 'tree#API',
          type: 'Tree props',
          defaultValue: '',
          desc: {
            'zh-CN': '在渲染类型为 tree 时，设置树的相关配置属性'
          },
          mode: ['pc'],
          pcDemo: 'nested-tree'
        },
        {
          name: 'v-model / modelValue',
          type: 'string[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '移动到右列表的数据项的key的数组值'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'panel-style',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '指定左右面板容器的样式,当面板的宽度大于外部容器的50%宽度时，面板会自适应容器的宽度。'
          },
          mode: ['pc'],
          pcDemo: 'custom-size',
          meta: {
            stable: '3.23.0'
          }
        },
        {
          name: 'panel-body-style',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '指定面板内容区域的样式'
          },
          mode: ['pc'],
          pcDemo: 'custom-size',
          meta: {
            stable: '3.23.0'
          }
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value:string[], move:string, keyArray:string[])=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '右侧列表元素变化时触发的事件;<br>\n                value: 穿梭框右侧数据值列表<br>\n                move: 数据移动方向，是left或者right<br>\n                keyArray: 被移动的数据值列表'
          },
          mode: ['pc'],
          pcDemo: 'transfer-events'
        },
        {
          name: 'left-check-change',
          type: '(checked:string[], statusChanged:string[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '左侧列表元素选择时触发的事件;<br>\n              checked: 穿梭框左侧被选中的数据值列表<br>\n              statusChanged: 穿梭框左侧选中状态发生变化的数据值列表'
          },
          mode: ['pc'],
          pcDemo: 'transfer-events'
        },
        {
          name: 'right-check-change',
          type: '(checked:string[], statusChanged:string[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '右侧列表元素选择时触发的事件;<br>\n              checked: 穿梭框右侧被选中的数据值列表<br>\n              statusChanged: 穿梭框右侧选中状态发生变化的数据值列表'
          },
          mode: ['pc'],
          pcDemo: 'transfer-events'
        }
      ],
      methods: [
        {
          name: 'clearQuery',
          type: '(name: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '开启过滤功能时，清空左右面板的搜索关键词'
          },
          mode: ['pc'],
          pcDemo: 'custom-filter'
        }
      ],
      slots: [
        {
          name: 'button-panel',
          defaultValue: '',
          desc: {
            'zh-CN': '穿梭按钮插槽'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '数据项的内容插槽，插槽数据上下文为： { option }'
          },
          mode: ['pc'],
          pcDemo: 'custom-render'
        },
        {
          name: 'left-footer',
          defaultValue: '',
          desc: {
            'zh-CN': '左侧列表底部的内容插槽'
          },
          mode: ['pc'],
          pcDemo: 'custom-footer'
        },
        {
          name: 'left-panel',
          defaultValue: '',
          desc: {
            'zh-CN': '左侧自定义内容插槽'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'right-footer',
          defaultValue: '',
          desc: {
            'zh-CN': '右侧列表底部的内容插槽'
          },
          mode: ['pc'],
          pcDemo: 'custom-footer'
        },
        {
          name: 'right-panel',
          defaultValue: '',
          desc: {
            'zh-CN': '右侧自定义内容插槽'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'ITransferData',
      type: 'interface',
      code: `
interface ITransferData {
  key: string,
  label: string,
  disabled: string,
  [other:string]: any
}
      `
    },
    {
      name: 'IDropConfig',
      type: 'interface',
      code: `
interface IDropConfig {
  plugin: object // 指定拖放排序的插件Sortable, 该变量通过 import Sortable from 'sortablejs' 导入
}
      `
    }
  ]
}
