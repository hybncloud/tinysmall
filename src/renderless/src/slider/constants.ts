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
/** slider 静态常量：由组件层与 renderless 层直接共享导入，替代原 _constants prop 注入机制 */
export const $constants = {
  TIP_HEIGHT: 22,
  BUTTON_SIZE: 28,
  HALF_BAR_HEIGHT: 2,
  PC_TIP_CLS: 'tiny-slider__tips',
  PC_SLIDER_CLS: 'tiny-slider',
  PC_RANGE_CLS: 'tiny-slider__range',
  PC_BUTTON_CLS: 'tiny-slider__handle',
  PC_LABEL_CLS: 'tiny-slider__mark-label',
  PC_LEFT_SVG_CLS: 'tiny-slider-left-svg',
  PC_RIGHT_SVG_CLS: 'tiny-slider-right-svg',
  MOBILE_TIP_CLS: 'tiny-mobile-slider__tips',
  MOBILE_SLIDER_CLS: 'tiny-mobile-slider',
  MOBILE_RANGE_CLS: 'tiny-mobile-slider__range',
  MOBILE_BUTTON_CLS: 'tiny-mobile-slider__handle',
  MOBILE_LEFT_SVG_CLS: 'tiny-mobile-slider-left-svg',
  MOBILE_RIGHT_SVG_CLS: 'tiny-mobile-slider-right-svg',
  Mode: 'pc',
  tipCls(mode) {
    return mode === this.Mode ? this.PC_TIP_CLS : this.MOBILE_TIP_CLS
  },
  sliderCls(mode) {
    return mode === this.Mode ? this.PC_SLIDER_CLS : this.MOBILE_SLIDER_CLS
  },
  rangeCls(mode) {
    return mode === this.Mode ? this.PC_RANGE_CLS : this.MOBILE_RANGE_CLS
  },
  buttonCls(mode) {
    return mode === this.Mode ? this.PC_BUTTON_CLS : this.MOBILE_BUTTON_CLS
  },
  leftSvgCls(mode) {
    return mode === this.Mode ? this.PC_LEFT_SVG_CLS : this.MOBILE_LEFT_SVG_CLS
  },
  rightSvgCls(mode) {
    return mode === this.Mode ? this.PC_RIGHT_SVG_CLS : this.MOBILE_RIGHT_SVG_CLS
  },
  TIP_CLS(mode) {
    return mode === this.Mode ? this.PC_TIP_CLS : this.MOBILE_TIP_CLS
  },
  SLIDER_CLS(mode) {
    return mode === this.Mode ? this.PC_SLIDER_CLS : this.MOBILE_SLIDER_CLS
  },
  RANGE_CLS(mode) {
    return mode === this.Mode ? this.PC_RANGE_CLS : this.MOBILE_RANGE_CLS
  },
  BUTTON_CLS(mode) {
    return mode === this.Mode ? this.PC_BUTTON_CLS : this.MOBILE_BUTTON_CLS
  }
}
