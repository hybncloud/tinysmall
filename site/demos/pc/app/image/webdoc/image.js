export default {
  column: '2',
  owner: '',
  show: true,
  cloud: false,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法'
      },
      desc: {
        'zh-CN':
          '通过 <code>src</code> 设置图片路径。<br>' +
          ' 通过 <code>fit</code> 属性确定图片如何适应到容器框，同原生 css 的 object-fit 属性。<br>' +
          '<p class="custom-block-title">object-fit 说明 </p> ' +
          '<p>fill：被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比<br>' +
          'contain：被替换的内容大小可以填充元素的内容框<br>' +
          'cover：被替换的内容大小保持其宽高比，同时填充元素的整个内容框<br>' +
          'none：被替换的内容尺寸不会被改变<br>' +
          'scale-down：内容的尺寸就像是指定了 none 或 contain，取决于哪一个将导致更小的对象尺寸。</p>' +
          'The <code>fit</code> attribute determines how the image fits into the container box, which is the same as the object-fit attribute of the native CSS.<br>' +
          '<p class="custom-block-title">object-fit description</p>' +
          "<p>fill:The replaced content is scaled to maintain its aspect ratio when filling the element's content box.<br>" +
          'contain:The size of the replaced content fills the content box of the element.<br>' +
          'cover:The size of the replaced content maintains its aspect ratio and fills the entire content box of the element.<br>' +
          'none:The size of the replaced content is not changed.<br>' +
          'scale-down:The size of the content is like specifying none or contain, depending on which would result in a smaller object size.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-placeholder',
      name: {
        'zh-CN': '占位内容'
      },
      desc: {
        'zh-CN': '通过 <code>slot = placeholder</code> 自定义占位内容。'
      },
      codeFiles: ['custom-placeholder.vue']
    },
    {
      demoId: 'lazy',
      name: {
        'zh-CN': '懒加载'
      },
      desc: {
        'zh-CN':
          '通过 <code>lazy</code> 开启懒加载功能，当图片滚动到可视范围内才会加载。<br>' +
          '通过 <code>scroll-container</code> 来设置滚动容器，若未定义，则为最近一个 <code>overflow</code> 值为 <code>auto</code> 或 <code>scroll</code> 的父元素。' +
          '<p>lazy 懒加载的图片必须是远程的图片，不支持静态图片懒加载。</p>' +
          'Set the scroll container by <code>scroll-container</code>.If not defined, Is the parent element of the last <code>overflow</code> value <code>auto</code> or <code>scroll</code>.<br>' +
          '<p>lazy Lazy loading images must be remote images. Lazy loading of static images is not supported. </p>'
      },
      codeFiles: ['lazy.vue']
    },
    {
      demoId: 'preview',
      name: {
        'zh-CN': '预览大图'
      },
      desc: {
        'zh-CN':
          '通过 <code>preview-src-list</code> 属性，传入一组图片 url 的数组，点击图片后，会进入预览大图的模式。<br>' +
          '通过 <code>z-index</code> 设置预览图片的元素的 z-index。<br>' +
          '通过添加 <code>show-index</code> 开启图片序号展示。<br>' +
          'Use <code>z-index</code> to set the z-index of the element of the preview image.<br>' +
          'Add <code>show-index</code> to enable the image sequence number display.<br>'
      },
      codeFiles: ['preview.vue']
    },
    {
      demoId: 'keep-style',
      name: {
        'zh-CN': '保持图片样式属性'
      },
      desc: {
        'zh-CN': '通过 <code>keep-style</code> 属性可以让图片切换时样式保持一致，图片的缩放、旋转、边距等状态不重置。'
      },
      codeFiles: ['keep-style.vue']
    },
    {
      demoId: 'index-change',
      name: {
        'zh-CN': '图片切换事件'
      },
      desc: {
        'zh-CN': '图片切换时触发 <code>change-index</code> 事件，参数返回当前图片的 index。'
      },
      codeFiles: ['index-change.vue']
    },
    {
      demoId: 'count-slot',
      name: {
        'zh-CN': '图片计数插槽'
      },
      desc: {
        'zh-CN': '通过 <code>count</code> 设置图片计数插槽。'
      },
      codeFiles: ['count-slot.vue']
    },
    {
      demoId: 'preview-in-dialog',
      name: {
        'zh-CN': '对话框中预览图片'
      },
      desc: {
        'zh-CN': '在 <code>dialog-box</code> 元素中嵌入 <code>image</code> 进行图片预览。'
      },
      codeFiles: ['preview-in-dialog.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽'
      },
      desc: {
        'zh-CN':
          '通过 <code> placeholder</code> 插槽，定义图片在加载中时的占位内容。通常由于图片加载快，会看不到这个插槽的出现，只有大图片时，会看到加载中的插槽。 <br>' +
          ' 通过 <code> error </code> 插槽，定义图片在加载失败后的占位内容。' +
          'Using the <code> error </code> slot, define the placeholder content of the image after loading failure.'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': '<code>load</code> 事件：图片加载成功触发。<br><code>error</code> 事件：图片加载失败触发。' +
          '<code>error</code> event: The image failed to be loaded. '
      },
      codeFiles: ['events.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 src 设置图片路径，通过 fit 属性确定图片如何适应到容器框。',
      cloud: {
        value: false
      },
      apis: ['src', 'fit'],
      demos: ['basic-usage']
    },
    {
      id: 'placeholder',
      name: '占位内容',
      support: {
        value: true
      },
      description: '通过 slot = placeholder 自定义占位内容。',
      cloud: {
        value: false
      },
      apis: ['placeholder-slot'],
      demos: ['custom-placeholder']
    },
    {
      id: 'lazy',
      name: '懒加载',
      support: {
        value: true
      },
      description: '通过 lazy 开启懒加载功能，当图片滚动到可视范围内才会加载。',
      cloud: {
        value: false
      },
      apis: ['lazy', 'scroll-container'],
      demos: ['lazy']
    },
    {
      id: 'preview',
      name: '预览功能',
      support: {
        value: true
      },
      description: '通过 preview-src-list 属性，传入一组图片 url 的数组，点击图片后进入预览大图模式。',
      cloud: {
        value: false
      },
      apis: ['preview-src-list', 'z-index', 'show-index'],
      demos: ['preview']
    },
    {
      id: 'style',
      name: '样式保持',
      support: {
        value: true
      },
      description: '通过 keep-style 属性可以让图片切换时样式保持一致。',
      cloud: {
        value: false
      },
      apis: ['keep-style'],
      demos: ['keep-style']
    },
    {
      id: 'events',
      name: '事件处理',
      support: {
        value: true
      },
      description: '支持 change-index、load、error 等事件。',
      cloud: {
        value: false
      },
      apis: ['change-index', 'load', 'error'],
      demos: ['index-change', 'events']
    },
    {
      id: 'slots',
      name: '插槽',
      support: {
        value: true
      },
      description: '支持 placeholder、error、count 等插槽。',
      cloud: {
        value: false
      },
      apis: ['placeholder-slot', 'error-slot', 'count-slot'],
      demos: ['slot', 'count-slot']
    }
  ]
}
