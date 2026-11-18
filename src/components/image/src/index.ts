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
import type { IImageApi } from '@tinysmall/renderless/types/image.type'
import template from 'virtual-template?pc'
import { imageProps, $constants } from './pc.vue'

export { imageProps }
export { $constants }

export default defineComponent({
  name: $prefix + 'Image',
  props: imageProps,
  setup(props, context) {
    return $setup({ props, context, template }) as unknown as IImageApi
  }
})
