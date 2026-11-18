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
import { $setup, $prefix, defineComponent } from '@tinysmall/common'
import { api } from '@tinysmall/renderless/picker/vue'
import template from 'virtual-template?pc'
import { datePickerProps, $constants } from './pc.vue'

export { datePickerProps }
export { $constants }

const getWrapFunc = (name) =>
  function (...args) {
    const picker = this.$refs.modeTemplate
    if (picker && picker[name]) {
      return picker[name](...args)
    }
  }

export default defineComponent({
  name: $prefix + 'DatePicker',
  props: datePickerProps,
  created() {
    // 解决三层组件导致第一层datePicker无法调用Picker方法（例如：handleFocus）的问题
    api
      .filter((item) => item !== 'state')
      .forEach((method) => {
        if (!this[method]) {
          this[method] = getWrapFunc(method)
        }
      })
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
