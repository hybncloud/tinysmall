<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<script lang="tsx">
import { renderless, api } from '@tinysmall/renderless/tag/vue'
import { setup, h, defineComponent } from '@tinysmall/common'
import { iconClose } from '@tinysmall/icon'
import type { ITagApi } from '@tinysmall/renderless/types/tag.type'

export const tagProps = {
  hit: Boolean,
  text: String,
  type: String,
  size: String,
  round: Boolean,
  color: {
    type: [String, Array],
    default: ''
  },
  closable: Boolean,
  disabled: Boolean,
  onlyIcon: Boolean, // 仅图标模式
  effect: {
    type: String,
    default: 'light',
    validator: (value: string) => Boolean(~['dark', 'light', 'plain'].indexOf(value))
  },
  beforeDelete: Function,
  value: [Number, String],
  maxWidth: {
    type: [String, Number],
    default: null
  }
}

export default defineComponent({
  name: 'TinyTag',
  components: {
    IconClose: iconClose()
  },
  emits: ['click', 'close'],
  props: tagProps,
  setup(props, context) {
    return setup({ props, context, renderless, api, h })
  },
  render() {
    const {
      type,
      size,
      hit,
      effect,
      slots,
      closable,
      color,
      handleClose,
      handleClick,
      disabled,
      state,
      value,
      onlyIcon,
      maxWidth,
      round
    } = this

    let styles = {}

    const classes = [
      'tiny-tag',
      type ? `tiny-tag--${type}` : '',
      size ? `tiny-tag--${size}` : '',
      effect ? `tiny-tag--${effect}` : '',
      hit && 'is-hit',
      disabled ? 'is-disabled' : '',
      onlyIcon ? 'tiny-tag--only-icon' : '',
      round && 'is-round'
    ]

    if (color) {
      if (Array.isArray(color)) {
        styles = { background: color[0], color: color[1] }
      } else if (['red', 'orange', 'green', 'blue', 'purple', 'brown', 'grey', 'gold'].includes(color)) {
        classes.push(`tiny-tag--${color}`)
      } else {
        styles = { background: color }
      }
    }

    if (maxWidth) {
      styles.maxWidth = maxWidth
    }

    const tagElement =
      value || (slots.default && slots.default()) ? (
        <span data-tag="tiny-tag" class={classes} style={styles} onClick={handleClick}>
          {value ? (
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</span>
          ) : (
            slots.default && (
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {slots.default()}
              </span>
            )
          )}
          {closable && <icon-close class="tiny-svg-size tiny-tag__close" onClick={handleClose}></icon-close>}
        </span>
      ) : (
        <span></span>
      )

    return tagElement
  }
})
</script>
