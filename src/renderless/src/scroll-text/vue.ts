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

import { $constants } from './constants'
import { computedBindStyle, stopAnimation, startAnimation } from './index'

export const api = ['state', 'startAnimation', 'stopAnimation']

export const renderless = (props, { computed, reactive }) => {
  const api = {
    computedBindStyle
  }

  const state = reactive({
    isStop: false,
    bindStyle: computed(() => api.computedBindStyle({ time: props.time }))
  })

  Object.assign(api, {
    state,
    startAnimation: startAnimation({ props, state }),
    stopAnimation: stopAnimation({ props, state })
  })

  return api
}
