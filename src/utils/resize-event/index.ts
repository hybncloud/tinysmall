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

import { isServer } from '../globalConfig'

type HandledElement = Element & {
  __resizeListeners__?: ResizeCallback[]
  __ro__?: ResizeObserver
}

type ResizeCallback = () => void

/* istanbul ignore next */
const resizeHandler: ResizeObserverCallback = (entries) => {
  entries.forEach((entry) => {
    const ele = entry.target as HandledElement
    const listeners = ele.__resizeListeners__ || []
    if (listeners.length) listeners.forEach((fn) => fn())
  })
}

/* istanbul ignore next */
export const addResizeListener = (el: HandledElement, fn: ResizeCallback) => {
  if (isServer) return
  if (el.__resizeListeners__) {
    el.__resizeListeners__.push(fn)
  } else {
    el.__resizeListeners__ = []
    el.__ro__ = new ResizeObserver(resizeHandler)
    el.__ro__.observe(el)
  }
}

/* istanbul ignore next */
export const removeResizeListener = (el: HandledElement | undefined | null, fn: ResizeCallback) => {
  if (!el || !el.__resizeListeners__) return

  el.__resizeListeners__.splice(el.__resizeListeners__.indexOf(fn), 1)

  if (!el.__resizeListeners__.length && el.__ro__) {
    el.__ro__.disconnect()
    delete el.__ro__
  }
}
