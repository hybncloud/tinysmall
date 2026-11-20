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
/** progress 静态常量：由组件层与 renderless 层直接共享导入，替代原 _constants prop 注入机制 */
export const $constants = {
  PROGRESS_TYPE: {
    LINE: 'line',
    CIRCLE: 'circle',
    DASHBOARD: 'dashboard'
  },
  PROGRESS_SIZE: {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
  },
  PROGRESS_SIZE_WIDTH: {
    SMALL: 48,
    MEDIUM: 96,
    LARGE: 160
  },
  PROGRESS_STATUS: {
    DEFAULT: 'default',
    SUCCESS: 'success',
    EXCEPTION: 'exception',
    WARNING: 'warning'
  },
  STATUS_TO_COLOR: {
    success: '#00a874',
    exception: '#eb171f',
    warning: '#fdc000'
  },
  STATUS_DEFAULT_COLOR: '#0067d1',
  ICON_CIRCLE_WARNING: 'icon-warning',
  ICON_CIRCLE_SUCCESS: 'icon-success',
  ICON_CIRCLE_EXCEPTION: 'icon-error',
  ICON_SUCCESS: 'icon-yes',
  ICON_EXCEPTION: 'icon-close',
  ICON_WARNING: 'icon-warning',
  TEXT_XS: 12,
  TEXT_SM: 14,
  WIDTH_RATE_TWO: 2,
  WIDTH_RATE_THREE: 3,
  WIDTH_RATE_SIX: 6,
  DEFAULT_STROKE_WIDTH: 6,
  REL_STROKE_WIDTH: 4,
  DEFAULT_WIDTH: 126,
  STROKE_WIDTH_RATE: 0.4
}
