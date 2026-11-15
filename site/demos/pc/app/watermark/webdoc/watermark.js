export default {
  column: '2',
  owner: '',
  show: true,
  cloud: false,
  meta: {
    stable: '3.12.0'
  },
  demos: [
    {
      demoId: 'basic',
      name: {
        'zh-CN': '基本用法'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>content</code> 属性设置水印的文字。</br>通过 <code>font</code> 属性设置水印的样式。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'image',
      name: {
        'zh-CN': '图片水印'
      },
      desc: {
        'zh-CN': '<p>通过 <code>image</code> 属性设置水印的图片。</p>'
      },
      codeFiles: ['image.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 content 设置水印文字，font 设置水印样式。',
      cloud: {
        value: false
      },
      apis: ['content', 'font'],
      demos: ['basic']
    },
    {
      id: 'image',
      name: '图片水印',
      support: {
        value: true
      },
      description: '通过 image 属性设置水印图片。',
      cloud: {
        value: false
      },
      apis: ['image'],
      demos: ['image']
    }
  ]
}
