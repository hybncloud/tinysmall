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
        'zh-CN': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'page-empty',
      name: {
        'zh-CN': '页面级异常'
      },
      desc: {
        'zh-CN':
          '<p>通过添加`page-empty`属性展示页面级异常，其中 type 类型有`pagenoperm`、 `pageweaknet`、 `pagenothing`、 `pageservererror`<br> 对应场景：<br>`pagenoperm` ：无访问权限<br>`pageweaknet` ：网络异常<br>`pagenothing` ：你访问的页面不存在<br>`pageservererror`：服务器异常 </p>'
      },
      codeFiles: ['page-empty.vue']
    },
    {
      demoId: 'component-page',
      name: {
        'zh-CN': '组件级异常'
      },
      desc: {
        'zh-CN':
          '<p>通过添加`component-page`属性展示组件级异常，其中 type 类型有`noperm`、 `nodata`、 `weaknet`、 `noresult`、 `nonews`<br> 对应场景：<br>`noperm` ：无访问权限<br>`nodata` ：暂无数据<br>`weaknet` ：网络不给力<br>`noresult`：无相关搜索结果<br>`nonews`：暂无最新消息<br></p>'
      },
      codeFiles: ['component-page.vue']
    },
    {
      demoId: 'sub-message',
      name: {
        'zh-CN': '自定义二级标题内容'
      },
      desc: {
        'zh-CN': '<p>通过`sub-message`自定义二级标题</p>'
      },
      codeFiles: ['sub-message.vue']
    },
    {
      demoId: 'button-text',
      name: {
        'zh-CN': '自定义按钮文本'
      },
      desc: {
        'zh-CN': '<p>已去除`button-text`自定义按钮文本，直接可以通过插槽自定义</p>'
      },
      codeFiles: ['button-text.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽'
      },
      desc: {
        'zh-CN': '<p>通过命名插槽 `content`，自定义内容区</p>'
      },
      codeFiles: ['slot.vue']
    }
  ]
}
