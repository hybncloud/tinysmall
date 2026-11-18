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
import type { IconPosition } from '@tinysmall/checkbox/src'
import template from 'virtual-template?pc'
import { $constants, checkboxGroupProps } from './pc.vue'

export { checkboxGroupProps }

export default defineComponent({
  props: checkboxGroupProps,
  name: $prefix + 'CheckboxGroup',
  componentName: 'CheckboxGroup',
  emits: ['change', 'update:modelValue'],
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
