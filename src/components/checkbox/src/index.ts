/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { $constants, checkboxProps } from './pc.vue'

export { checkboxProps }
export { $constants }

export type IconPosition = 'center' | 'top'

export default defineComponent({
  name: $prefix + 'Checkbox',
  props: checkboxProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
