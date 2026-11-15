export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-space',
      name: {
        'zh-CN': '基本用法'
      },
      desc: {
        'zh-CN': '<p>默认采用横向布局（row），自动为插槽内容添加间距。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'space-size',
      name: {
        'zh-CN': '间距尺寸'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code> 属性设置间距大小，支持 small、medium、large 预定义值或自定义数值/数组。</p>'
      },
      codeFiles: ['space-size.vue']
    },
    {
      demoId: 'space-direction',
      name: {
        'zh-CN': '排列方向'
      },
      desc: {
        'zh-CN': '<p>通过 <code>direction</code> 属性设置布局方向，支持 row（横向）或 column（纵向）。</p>'
      },
      codeFiles: ['space-direction.vue']
    },
    {
      demoId: 'space-wrap',
      name: {
        'zh-CN': '换行显示'
      },
      desc: {
        'zh-CN': '<p>通过 <code>wrap</code> 属性控制子项内容是否换行显示。</p>'
      },
      codeFiles: ['space-wrap.vue']
    },
    {
      demoId: 'space-align',
      name: {
        'zh-CN': '交叉轴对齐'
      },
      desc: {
        'zh-CN': '<p>通过 <code>align</code> 属性设置交叉轴对齐方式，支持 start、center、end、baseline 等值。</p>'
      },
      codeFiles: ['space-align.vue']
    },
    {
      demoId: 'space-justify',
      name: {
        'zh-CN': '主轴对齐'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>justify</code> 属性设置主轴对齐方式，支持 start、center、end、space-between、space-around、space-evenly。</p>'
      },
      codeFiles: ['space-justify.vue']
    },
    {
      demoId: 'space-order',
      name: {
        'zh-CN': '自定义排序'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>order</code> 属性传入 key 数组来自定义子元素的渲染顺序，未设置 key 的子元素将自动排列在最后。</p>'
      },
      codeFiles: ['space-order.vue']
    }
  ]
}
