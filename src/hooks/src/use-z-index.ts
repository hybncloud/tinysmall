/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { inject, provide, ref } from 'vue'

export const maxZIndex = ref(2000)

export const useZIndex = (): number => {
  const injectedZIndex = inject('zIndex', maxZIndex.value)
  const zIndex = injectedZIndex + 1
  maxZIndex.value = Math.max(zIndex, maxZIndex.value)
  provide('zIndex', zIndex)
  return zIndex
}
