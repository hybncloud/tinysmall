<template>
  <div class="tiny-steps tiny-steps-standard">
    <ul class="tiny-steps-advanced">
      <li
        v-for="(node, index) in data"
        :key="index"
        :style="{ width: space ? state.computedSpace : 100 / data.length + '%' }"
        :class="{
          current: index === active,
          [node[statusField]]: node[statusField]
        }"
        @click="$emit('click', index, node)"
      >
        <slot name="item" :slot-scope="node" :index="index">
          <div class="label" :title="node[nameField]">
            <span>{{ node[nameField] }}</span>
          </div>
          <div v-if="node[countField]" class="count">
            {{ node[countField] }}
          </div>
          <div v-if="node[statusField]" :class="['dot', node[statusField]]">
            <icon-refresh v-if="node[statusField] === 'doing'"></icon-refresh>
            <icon-yes v-else-if="node[statusField] === 'done'"></icon-yes>
          </div>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/steps/vue'
import { props, setup, defineComponent } from '@tinysmall/common'
import { iconRefresh, iconYes } from '@tinysmall/icon'

export default defineComponent({
  emits: ['click'],
  components: {
    IconRefresh: iconRefresh(),
    IconYes: iconYes()
  },
  props: [
    ...props,
    'advanced',
    'line',
    'dot',
    'duration',
    'vertical',
    'showNumber',
    'nameField',
    'statusField',
    'countField',
    'start',
    'data',
    'space',
    'active',
    'reverse',
    'noArrow',
    'flex',
    'size',
    'contentCenter'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
