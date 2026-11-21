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

import type { ICascaderMenuRenderlessParams, ICascaderMenuState } from '../../types'

export const handleExpand = (state: ICascaderMenuState) => (e: MouseEvent) =>
  (state.activeNode = e.target as HTMLElement)

export const handleMouseMove =
  ({
    api,
    vm,
    state,
    svg
  }: Pick<ICascaderMenuRenderlessParams, 'api' | 'state' | 'vm'> & {
    svg: string
  }) =>
  (e: MouseEvent) => {
    const hoverZone = vm.$refs.hoverZone

    if (!state.activeNode || !hoverZone) {
      return
    }

    if (state.activeNode.contains(e.target as HTMLElement)) {
      if (state.hoverTimer) {
        clearTimeout(state.hoverTimer)
      }

      // ref cascaderMenu 的 $parent 即 cascader-menu 自身，等价于取自身根元素
      const { left } = vm.$el.getBoundingClientRect()
      const startX = e.clientX - left
      const { offsetWidth, offsetHeight } = vm.$el
      const top = state.activeNode.offsetTop
      const bottom = top + state.activeNode.offsetHeight

      hoverZone.innerHTML = `
      ${svg}${startX} ${top} L${offsetWidth} 0 V${top} Z" />
      ${svg}${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
    `
    } else if (!state.hoverTimer) {
      // hoverThreshold 来自注入的 cascader-panel 上下文（state.config 默认 500）
      state.hoverTimer = setTimeout(api.clearHoverZone, state.panel?.state.config.hoverThreshold || 500)
    }
  }

export const clearHoverZone =
  ({ vm }: Pick<ICascaderMenuRenderlessParams, 'vm'>) =>
  () => {
    const { hoverZone } = vm.$refs.hoverZone

    if (!hoverZone) {
      return
    }

    hoverZone.innerHTML = ''
  }
