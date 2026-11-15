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
          通过 <code>reference</code>  插槽来指定一个触发源，通过 <code>content</code> 属性来指定提示内容，点击触发源会弹出内容面板。<br>
          通过 <code>title</code> 属性来指定标题。<br>
          通过 <code>width</code>  属性来指定一个弹出面板的宽度。<br>
          <div class="tip custom-block">reference 插槽是必传插槽，没有它时组件渲染不出来。</div>
          `
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'trigger',
      name: {
        'zh-CN': '触发方式'
      },
      desc: {
        'zh-CN': `
          通过<code>trigger</code> 属性设定弹出框的 4 种触发方式，默认值为 <code> click </code>。<br>
          当触发方式为<code> manual</code>时，通过设置<code>v-model</code> 属性，动态控制显示和隐藏弹出框。
          `
      },
      codeFiles: ['trigger.vue']
    },
    {
      demoId: 'content',
      name: {
        'zh-CN': '弹出层内容'
      },
      desc: {
        'zh-CN': `
          通过 <code>content</code> 属性设置要显示的字符串内容。<br>
          通过 <code>default</code> 插槽，支持自定义复杂的内容结构。<br>
          `
      },
      codeFiles: ['content.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用'
      },
      desc: {
        'zh-CN': '<code>disabled</code> 设置是否禁用弹出框。'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'offset',
      name: {
        'zh-CN': '自定义偏移'
      },
      desc: {
        'zh-CN': `
          通过<code>arrow-offset</code> 设置箭头的在弹窗层上的偏移量。箭头默认至少会保留 8px 的空间，以保证箭头不会贴在弹窗层两边。<br>
          通过<code> offset</code> 设置弹框的偏移量，来改变弹框的位置。
          `
      },
      codeFiles: ['offset.vue']
    },
    {
      demoId: 'custom-popper',
      name: {
        'zh-CN': '自定义弹出面板'
      },
      desc: {
        'zh-CN': `
          通过<code>placement</code> 设置弹出框的的位置。<br>
          通过<code>visible-arrow</code> 设定是否显示提示框的箭头，默认值为 <code>true</code>。<br>
          通过<code>popper-class</code> 可配置单个或多个类名，通过类名可以控制弹窗样式。
          `
      },
      codeFiles: ['custom-popper.vue']
    },
    {
      demoId: 'delay',
      name: {
        'zh-CN': '延迟控制'
      },
      desc: {
        'zh-CN': `
          通过 <code>open-delay</code> 弹出框打开时延迟的时长，默认值为 0，单位为毫秒。<br>
          通过 <code>close-delay</code> 弹出框关闭时延迟的时长，默认值为 200，单位为毫秒。<br>
          <div class="tip custom-block">只有在触发方式为 hover 时，延迟控制功能才生效。</div>
          `
      },
      codeFiles: ['delay.vue']
    },
    {
      demoId: 'transition',
      name: {
        'zh-CN': '自定义渐变动画'
      },
      desc: {
        'zh-CN': '通过 <code>transition</code> 设置弹框的显示隐藏淡入淡出动画，默认取值 <code>fade-in-linear</code> 。'
      },
      codeFiles: ['transition.vue']
    },
    {
      demoId: 'popper-options',
      name: {
        'zh-CN': '高级选项'
      },
      desc: {
        'zh-CN': '通过<code>popper-options</code> 配置弹出框高级选项。'
      },
      codeFiles: ['popper-options.vue']
    },
    {
      demoId: 'ignore-boundaries',
      name: {
        'zh-CN': '忽略边界判断'
      },
      desc: {
        'zh-CN': `
          由于 Popper 会判断是否超出 offsetParent 从而调整弹框弹出的位置，有些时候并不能达到我们想要的效果。<br>
          因此提供一个在<code>popper-options</code>上新增一个属性<code>ignoreBoundaries: true</code> ，可以让 Popper 忽略边界判断，弹出的位置始终是我们设置的 placement 值。
        `
      },
      codeFiles: ['ignore-boundaries.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': `
          组件支持以下事件：<br>
          <code>hide</code> 隐藏时触发回调；<br>
          <code>show</code> 显示时触发回调；<br>
          <code>after-leave</code> 进入的动画结束后触发回调；<br>
          <code>after-enter</code> 离开的动画播结束后触发回调；<br>`
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
      description:
        '通过 reference 插槽指定触发源，通过 content 属性指定提示内容，通过 title 属性指定标题，通过 width 属性指定弹出面板宽度。',
      cloud: {
        value: true
      },
      apis: ['reference', 'content', 'title', 'width'],
      demos: ['basic-usage']
    },
    {
      id: 'trigger',
      name: '触发方式',
      support: {
        value: true
      },
      description: '通过 trigger 设置弹出框的触发方式，支持 click、hover、manual、focus，默认值为 click。',
      cloud: {
        value: true
      },
      apis: ['trigger', 'v-model'],
      demos: ['trigger']
    },
    {
      id: 'content',
      name: '弹出层内容',
      support: {
        value: true
      },
      description: '通过 content 属性设置字符串内容，通过 default 插槽支持自定义复杂的内容结构。',
      cloud: {
        value: true
      },
      apis: ['content', 'default'],
      demos: ['content']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '通过 disabled 设置是否禁用弹出框。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['disabled']
    },
    {
      id: 'position',
      name: '位置配置',
      support: {
        value: true
      },
      description: '通过 placement 设置弹出框位置，通过 arrow-offset 设置箭头偏移量，通过 offset 设置弹框偏移量。',
      cloud: {
        value: true
      },
      apis: ['placement', 'arrow-offset', 'offset'],
      demos: ['offset', 'custom-popper']
    },
    {
      id: 'delay',
      name: '延迟控制',
      support: {
        value: true
      },
      description: '通过 open-delay 设置弹出框打开延迟时长，通过 close-delay 设置关闭延迟时长。',
      cloud: {
        value: true
      },
      apis: ['open-delay', 'close-delay'],
      demos: ['delay']
    },
    {
      id: 'transition',
      name: '动画效果',
      support: {
        value: true
      },
      description: '通过 transition 设置弹框的显示隐藏淡入淡出动画。',
      cloud: {
        value: true
      },
      apis: ['transition'],
      demos: ['transition']
    },
    {
      id: 'popper',
      name: '高级配置',
      support: {
        value: true
      },
      description: '通过 popper-options 配置弹出框高级选项，通过 ignore-boundaries 忽略边界判断。',
      cloud: {
        value: true
      },
      apis: ['popper-options', 'ignore-boundaries'],
      demos: ['popper-options', 'ignore-boundaries']
    },
    {
      id: 'events',
      name: '事件',
      support: {
        value: true
      },
      description: '支持 hide、show、after-leave、after-enter 等事件。',
      cloud: {
        value: true
      },
      apis: ['hide', 'show', 'after-leave', 'after-enter'],
      demos: ['events']
    }
  ]
}
