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
          '通过 <code>action</code> 设置上传的服务接口， <code>upload-name</code> 设置上传的文件字段名，<code>data</code> 自定义上传时附带的额外参数。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-request-headers',
      name: {
        'zh-CN': '定义请求头部'
      },
      desc: {
        'zh-CN':
          '通过 <code>with-credentials</code> 开启支持发送 cookie 凭证信息，<code>headers</code> 自定义上传请求头信息。'
      },
      codeFiles: ['custom-request-headers.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸和禁用'
      },
      desc: {
        'zh-CN':
          '通过 <code>large</code>，<code>medium</code>，<code>small</code>，<code>mini</code> 设置组件尺寸，<code>disabled</code> 设置是否禁用，默认值为 false。'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'http-request',
      name: {
        'zh-CN': '自定义上传'
      },
      desc: {
        'zh-CN': '通过 <code>http-request</code> 配置覆盖默认的上传行为，自定义上传的实现。'
      },
      codeFiles: ['http-request.vue']
    },
    {
      demoId: 'fill-button-text',
      name: {
        'zh-CN': '定义按钮和标题'
      },
      desc: {
        'zh-CN':
          '通过 <code>dialog-title</code> 设置弹框的标题，<code>cancel-button-text</code> 设置取消按钮的文本，\n          <code>submit-button-text</code> 设置提交按钮的文本， <code>upload-button-text</code> 设置上传按钮的文本。'
      },
      codeFiles: ['fill-button-text.vue']
    },
    {
      demoId: 'file-limit',
      name: {
        'zh-CN': '上传数限制'
      },
      desc: {
        'zh-CN': '通过 <code>limit</code> 设置最大上传的文件数量，<code>multiple</code> 设置是否可同时选择多个文件。'
      },
      codeFiles: ['file-limit.vue']
    },
    {
      demoId: 'file-type',
      name: {
        'zh-CN': '限制文件类型和大小'
      },
      desc: {
        'zh-CN':
          '通过 <code>max-upload-file-size</code> 设置上传文件的大小， <code>accept</code> 设置可上传的文件类型，还可通过 <code>upload-file-type</code> 指定在上传时进行校验的文件类型。'
      },
      codeFiles: ['file-type.vue']
    },
    {
      demoId: 'upload-tip',
      name: {
        'zh-CN': '自定义上传提示'
      },
      desc: {
        'zh-CN': '通过 <code>uploadTip</code> 插槽自定义上传提示的内容块。'
      },
      codeFiles: ['upload-tip.vue']
    },
    {
      demoId: 'prevent-delete-file',
      name: {
        'zh-CN': '阻止删除'
      },
      desc: {
        'zh-CN':
          '在 <code>before-remove</code> 处理移除文件前的逻辑，若返回 false 或者返回 Promise 且被 reject，则阻止删除。'
      },
      codeFiles: ['prevent-delete-file.vue']
    },
    {
      demoId: 'before-upload',
      name: {
        'zh-CN': '阻止上传'
      },
      desc: {
        'zh-CN':
          '在 <code>before-upload</code> 回调中处理文件上传前的逻辑，若返回 false 或者返回 Promise 且被 reject，则阻止上传。'
      },
      codeFiles: ['before-upload.vue']
    },
    {
      demoId: 'upload-events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><code>remove</code> 监听文件移除事件；<br/> <code>error</code> 监听文件上传失败事件；<br/>\n          <code>exceed</code> 监听文件超出个数限制事件；<br/> <code>progress</code> 监听文件上传过程事件；<br/>\n          <code>success</code> 监听文件上传成功事件。</div>'
      },
      codeFiles: ['upload-events.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description:
        '通过 action 设置上传的服务接口，upload-name 设置上传的文件字段名，data 自定义上传时附带的额外参数。',
      cloud: {
        value: false
      },
      apis: ['action', 'upload-name', 'data'],
      demos: ['basic-usage']
    },
    {
      id: 'headers',
      name: '请求配置',
      support: {
        value: true
      },
      description: '通过 with-credentials 开启支持发送 cookie 凭证信息，headers 自定义上传请求头信息。',
      cloud: {
        value: false
      },
      apis: ['with-credentials', 'headers'],
      demos: ['custom-request-headers']
    },
    {
      id: 'size',
      name: '尺寸和禁用',
      support: {
        value: true
      },
      description: '通过 large、medium、small、mini 设置组件尺寸，disabled 设置是否禁用。',
      cloud: {
        value: false
      },
      apis: ['large', 'medium', 'small', 'mini', 'disabled'],
      demos: ['size']
    },
    {
      id: 'custom-upload',
      name: '自定义上传',
      support: {
        value: true
      },
      description: '通过 http-request 配置覆盖默认的上传行为，自定义上传的实现。',
      cloud: {
        value: false
      },
      apis: ['http-request'],
      demos: ['http-request']
    },
    {
      id: 'text',
      name: '文本配置',
      support: {
        value: true
      },
      description:
        '通过 dialog-title、cancel-button-text、submit-button-text、upload-button-text 设置弹框标题和按钮文本。',
      cloud: {
        value: false
      },
      apis: ['dialog-title', 'cancel-button-text', 'submit-button-text', 'upload-button-text'],
      demos: ['fill-button-text']
    },
    {
      id: 'limit',
      name: '上传限制',
      support: {
        value: true
      },
      description: '通过 limit 设置最大上传的文件数量，multiple 设置是否可同时选择多个文件。',
      cloud: {
        value: false
      },
      apis: ['limit', 'multiple'],
      demos: ['file-limit']
    },
    {
      id: 'file-type',
      name: '文件类型限制',
      support: {
        value: true
      },
      description:
        '通过 max-upload-file-size 设置上传文件的大小，accept 设置可上传的文件类型，upload-file-type 指定校验的文件类型。',
      cloud: {
        value: false
      },
      apis: ['max-upload-file-size', 'accept', 'upload-file-type'],
      demos: ['file-type']
    },
    {
      id: 'events',
      name: '事件',
      support: {
        value: true
      },
      description:
        '支持 remove、error、exceed、progress、success 等事件，before-remove、before-upload 用于阻止删除和上传。',
      cloud: {
        value: false
      },
      apis: ['remove', 'error', 'exceed', 'progress', 'success', 'before-remove', 'before-upload'],
      demos: ['upload-events', 'prevent-delete-file', 'before-upload']
    }
  ]
}
