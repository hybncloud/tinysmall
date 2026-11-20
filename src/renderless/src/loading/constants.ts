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

/** loading 静态常量：由组件层与 renderless 层直接共享导入，替代原 _constants prop 注入机制 */
export const $constants = {
  TEXT_ATTR: 'tiny-loading__text',
  IS_FULLSCREEN_CLS: 'is-fullscreen',
  TEXT_SPINNER: 'tiny-loading__spinner',
  TEXT_BACKGROUND: 'tiny-loading__background',
  TEXT_CUSTOM_CLS: 'tiny-loading__custom-class',
  PARENT_HIDDEN_CLS: 'tiny-loading__parent-hidden',
  PARENT_RELATIVE_CLS: 'tiny-loading__parent-relative',
  LOAD_ICON_TEXT: 'ui.load.dot'
}
