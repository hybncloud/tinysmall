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
        'zh-CN': '通过 <code>action</code> 设置上传的服务器地址， <code>data</code> 设置上传时附带的额外参数。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用'
      },
      desc: {
        'zh-CN': '通过 <code>disabled</code> 设置禁用功能。'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'multiple-file',
      name: {
        'zh-CN': '文件多选'
      },
      desc: {
        'zh-CN': '通过 <code>multiple</code> 设置实现文件多选，默认单选。'
      },
      codeFiles: ['multiple-file.vue']
    },
    {
      demoId: 'manual-upload',
      name: {
        'zh-CN': '手动上传'
      },
      desc: {
        'zh-CN': '通过 <code>auto-upload</code> 取消自动上传，配合 <code>submit</code> 实例方法手动上传。'
      },
      codeFiles: ['manual-upload.vue']
    },
    {
      demoId: 'accept-file-image',
      name: {
        'zh-CN': '限制文件类型'
      },
      desc: {
        'zh-CN': '通过 <code>accept</code> 设置限制上传文件的格式只能为图片类型。'
      },
      codeFiles: ['accept-file-image.vue']
    },
    {
      demoId: 'max-file-count',
      name: {
        'zh-CN': '最大上传数'
      },
      desc: {
        'zh-CN':
          '通过 <code>limit</code> 设置限制上传文件的个数， <code>is-hidden</code> 设置达到最大上传数时是否隐藏上传按钮。'
      },
      codeFiles: ['max-file-count.vue']
    },
    {
      demoId: 'custom-prefix',
      name: {
        'zh-CN': '文件选择前确认'
      },
      desc: {
        'zh-CN':
          '通过 <code>before-add-file</code> 执行文件选择之前的钩子，若返回 <code>false</code> 或者返回 <code>Promise</code> 且被 <code>reject</code>，则停止添加文件。\n          如果不用以上 2 种方式，也可以通过执行回调函数继续进行上传，参数为回调函数。'
      },
      codeFiles: ['custom-prefix.vue']
    },
    {
      demoId: 'before-upload-limit',
      name: {
        'zh-CN': '自定义上传前限制'
      },
      desc: {
        'zh-CN':
          '通过 <code>before-upload</code> 执行上传文件前的操作，对文件类型和大小做限制，返回 <code>false</code> 或 <code>reject</code> 则阻止上传。'
      },
      codeFiles: ['before-upload-limit.vue']
    },
    {
      demoId: 'prevent-delete-file',
      name: {
        'zh-CN': '阻止删除文件'
      },
      desc: {
        'zh-CN':
          '通过 <code>before-remove</code> 执行移除文件前的操作，返回 <code>false</code> 或 <code>reject</code> 则阻止删除。'
      },
      codeFiles: ['prevent-delete-file.vue']
    },
    {
      demoId: 'upload-request',
      name: {
        'zh-CN': '定义请求头部'
      },
      desc: {
        'zh-CN':
          '通过 <code>headers</code> 配置上传请求头部信息， <code>with-credentials</code> 设置允许发送 cookie 凭证信息。'
      },
      codeFiles: ['upload-request.vue']
    },
    {
      demoId: 'http-request',
      name: {
        'zh-CN': '覆盖默认请求'
      },
      desc: {
        'zh-CN': '通过 <code>http-request</code> 配置覆盖默认的上传行为，自定义上传的实现。'
      },
      codeFiles: ['http-request.vue']
    },
    {
      demoId: 'drag-upload',
      name: {
        'zh-CN': '拖拽文件上传'
      },
      desc: {
        'zh-CN':
          '通过 <code>drag</code> 设置能否拖拽文件上传，若配置了 <code>accept</code> 属性，则通过监听 <code>drop-error</code> 事件来操作不合规的拖拽文件信息。'
      },
      codeFiles: ['drag-upload.vue']
    },
    {
      demoId: 'paste-upload',
      name: {
        'zh-CN': '粘贴上传'
      },
      desc: {
        'zh-CN':
          '通过 <code>paste-upload</code> 设置能否粘贴文件上传， <code>max-name-length</code> 限制文件名显示的字符数。'
      },
      codeFiles: ['paste-upload.vue']
    },
    {
      demoId: 'upload-file-list',
      name: {
        'zh-CN': '文件列表'
      },
      desc: {
        'zh-CN':
          '通过 <code>file-list</code> 设置上传的文件列表，也可通过 <code>:show-file-list="false"</code> 关闭列表的显示； <code>open-download-file</code> 设置文件是否可下载。'
      },
      codeFiles: ['upload-file-list.vue']
    },
    {
      demoId: 'file-size',
      name: {
        'zh-CN': '文件大小限制'
      },
      desc: {
        'zh-CN': '<p>通过 <code>file-size</code> 配置上传文件的大小。<p>'
      },
      codeFiles: ['file-size.vue']
    },
    {
      demoId: 'file-size-array',
      name: {
        'zh-CN': '文件大小范围'
      },
      desc: {
        'zh-CN': '<p>通过 <code>file-size</code> 配置为数组类型限制上传文件的大小范围。<p>'
      },
      codeFiles: ['file-size-array.vue']
    },
    {
      demoId: 'prompt-tip',
      name: {
        'zh-CN': 'tip 提示'
      },
      desc: {
        'zh-CN': '<p>通过 <code>promptTip</code> 为 `true` 设置提示为 tip 类型，悬浮图标时显示 tip 提示。<p>'
      },
      codeFiles: ['prompt-tip.vue']
    },
    {
      demoId: 'upload-file-list-slot',
      name: {
        'zh-CN': '定义文件列表'
      },
      desc: {
        'zh-CN': '通过 <code>name</code> 设置上传的文件字段名， <code>file</code> 插槽自定义文件列表。'
      },
      codeFiles: ['upload-file-list-slot.vue']
    },
    {
      demoId: 'upload-file-list-thumb',
      name: {
        'zh-CN': '列表弹窗显示'
      },
      desc: {
        'zh-CN':
          '通过 <code>list-type="thumb"</code> 开启文件列表弹窗显示， <code>thumb-option</code> 设置弹窗相关数据。'
      },
      codeFiles: ['upload-file-list-thumb.vue']
    },
    {
      demoId: 'upload-file-list-saas',
      name: {
        'zh-CN': 'SaaS 风格文件列表'
      },
      desc: {
        'zh-CN': '通过 <code>list-type = saas</code> 切换 SaaS 风格文件列表。'
      },
      codeFiles: ['upload-file-list-saas.vue']
    },
    {
      demoId: 'show-download-bar',
      name: {
        'zh-CN': '下载进度条'
      },
      desc: {
        'zh-CN':
          '通过给 file 对象设置 <code>showDownloadBar=true</code> 可以显示下载进度条， <code>downloadPercentage</code> 属性传入下载进度， <code>downloadStatus</code> 设置下载状态。'
      },
      codeFiles: ['show-download-bar.vue']
    },
    {
      demoId: 'picture-card',
      name: {
        'zh-CN': '照片墙'
      },
      desc: {
        'zh-CN':
          '通过设置 <code>list-type="picture-card"</code> 开启照片墙模式， <code>preview</code> 监听此模式下的图片预览按钮的点击事件。'
      },
      codeFiles: ['picture-card.vue']
    },
    {
      demoId: 'file-picture-card',
      name: {
        'zh-CN': '定义照片墙列表'
      },
      desc: {
        'zh-CN':
          '通过 <code>downloadFile</code> 实例方法实现下载功能， <code>handleRemove</code> 实例方法实现删除功能。'
      },
      codeFiles: ['file-picture-card.vue']
    },
    {
      demoId: 'picture-list',
      name: {
        'zh-CN': '图片列表缩略图'
      },
      desc: {
        'zh-CN': '通过设置 <code>list-type="picture"</code> 实现图片列表缩略图显示。'
      },
      codeFiles: ['picture-list.vue']
    },
    {
      demoId: 'clear-files',
      name: {
        'zh-CN': '手动清空列表'
      },
      desc: {
        'zh-CN':
          '通过 <code>clearFiles</code> 实例方法实现清空已上传的文件列表（注意：该方法不支持在 <code>before-upload</code> 中调用）。'
      },
      codeFiles: ['clear-files.vue']
    },
    {
      demoId: 'abort-quest',
      name: {
        'zh-CN': '手动取消上传请求'
      },
      desc: {
        'zh-CN': '通过 <code>abort</code> 实例方法取消上传请求。'
      },
      codeFiles: ['abort-quest.vue']
    },
    {
      demoId: 'form-validation',
      name: {
        'zh-CN': '表单校验'
      },
      desc: {
        'zh-CN': '通过 <code>form</code> 表单结合，实现表单校验。'
      },
      codeFiles: ['form-validation.vue']
    },
    {
      demoId: 'upload-user-head',
      name: {
        'zh-CN': '用户头像上传'
      },
      desc: {
        'zh-CN': '通过 <code>URL.createobjectURL</code> 创建出文件的 URL 对象，用来展示头像。'
      },
      codeFiles: ['upload-user-head.vue']
    },
    {
      demoId: 'image-size',
      name: {
        'zh-CN': '获取图片原始尺寸'
      },
      desc: {
        'zh-CN': '通过 <code>FileReader.readAsDataURL()</code> 读取文件中的内容，获取图片的原始尺寸。'
      },
      codeFiles: ['image-size.vue']
    },
    {
      demoId: 'custom-trigger',
      name: {
        'zh-CN': '触发源插槽'
      },
      desc: {
        'zh-CN': '通过 <code>trigger</code> 插槽自定义文件选择触发源的内容，有触发文件选项框弹出的功能。'
      },
      codeFiles: ['custom-trigger.vue']
    },
    {
      demoId: 'custom-upload-tip',
      name: {
        'zh-CN': '定义上传提示'
      },
      desc: {
        'zh-CN':
          '通过 <code>tip</code> 插槽自定义上传提示， <code>re-uploadable</code> 启用重新上传功能， <code>re-upload-tip</code> 自定义重新上传提示的左侧文字。'
      },
      codeFiles: ['custom-upload-tip.vue']
    },
    {
      demoId: 'encrypt-config',
      name: {
        'zh-CN': '水印和加密'
      },
      desc: {
        'zh-CN': '通过 <code>encrypt-config</code> 开启水印和加密弹窗配置。'
      },
      codeFiles: ['encrypt-config.vue']
    },
    {
      demoId: 'upload-events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><code>preview</code> 监听文件点击事件；<br/> <code>remove</code> 监听文件移除事件；<br/> <code>error</code> 监听文件上传失败事件；<br/>\n          <code>exceed</code> 监听文件超出个数限制事件；<br/> <code>progress</code> 监听文件上传过程事件；<br/> <code>change</code> 监听文件改变事件（文件改变涵盖文件添加、上传成功和上传失败）；<br/>\n          <code>success</code> 监听文件上传成功事件；<br/> <code>hash-progress</code> 监听文件上传生成 hash 值事件。</div>'
      },
      codeFiles: ['upload-events.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '支持基本的文件上传功能，可配置上传地址和附加参数。',
      cloud: {
        value: true
      },
      apis: ['action', 'data'],
      demos: ['basic-usage']
    },
    {
      id: 'multiple',
      name: '多文件上传',
      support: {
        value: true
      },
      description: '支持同时上传多个文件。',
      cloud: {
        value: true
      },
      apis: ['multiple'],
      demos: ['multiple']
    },
    {
      id: 'file-type',
      name: '文件类型限制',
      support: {
        value: true
      },
      description: '支持限制上传文件的类型。',
      cloud: {
        value: true
      },
      apis: ['accept'],
      demos: ['file-type']
    },
    {
      id: 'file-size',
      name: '文件大小限制',
      support: {
        value: true
      },
      description: '支持限制上传文件的大小。',
      cloud: {
        value: true
      },
      apis: ['limit-size'],
      demos: ['file-size']
    },
    {
      id: 'upload-mode',
      name: '上传模式',
      support: {
        value: true
      },
      description: '支持自动上传和手动上传两种模式。',
      cloud: {
        value: true
      },
      apis: ['auto-upload'],
      demos: ['upload-mode']
    }
  ]
}
