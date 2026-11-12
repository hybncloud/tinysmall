<template>
  <transition name="tiny-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="state.visible"
      data-tag="tiny-loading"
      class="tiny-loading tiny-loading__mask"
      :style="{ backgroundColor: state.background || '' }"
      :class="[state.customClass, { 'is-fullscreen': state.fullscreen }]"
    >
      <div
        :class="[
          'tiny-loading__spinner',
          {
            small: 'tiny-loading__spinner-small',
            medium: 'tiny-loading__spinner-medium',
            large: 'tiny-loading__spinner-large'
          }[size]
        ]"
      >
        <component v-if="state.spinner" :is="state.spinner" class="tiny-icon-loading" />
        <img v-else-if="state.loadingImg" class="circular" :style="state.iconStyle" :src="state.loadingImg" />
        <!-- 新规范适配 -->
        <tiny-icon-loading-shadow v-else class="circular"></tiny-icon-loading-shadow>
        <p v-if="state.text" class="tiny-loading__text">{{ state.text }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { $prefix, setup, props, defineComponent } from '@tinysmall/common'
import { renderless, api } from '@tinysmall/renderless/loading/vue'
import '@tinysmall/theme/loading/index.less'
import { iconLoadingShadow } from '@tinysmall/icon'
import type { ILoadingApi } from '@tinysmall/renderless/types/loading.type'

export default defineComponent({
  inheritAttrs: false,
  name: $prefix + 'Loading',
  emits: ['after-leave'],
  props: [...props, '_constants', 'loadingImg', 'size'],
  components: {
    TinyIconLoadingShadow: iconLoadingShadow()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ILoadingApi
  }
})
</script>
