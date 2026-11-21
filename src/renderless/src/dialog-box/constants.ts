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

/** dialog-box 静态常量：由组件层与 renderless 层直接共享导入，替代原 _constants prop 注入机制 */
export const $constants = {
  DIALOG_SLIDER_RIGHT: 'dialog-slideRight',
  DIALOG_FADE: 'dialog-fade',
  SELECT_DROPDOWN: 'TinySelectDropdown',
  DROPDOWN_MENU: 'TinyDropdownMenu',
  DIALOG_BOX_CLASS: 'div.tiny-dialog-box',
  PC_SCROLL_LOCK_CLASS: 'dialog-box__scroll-lock',
  MOBILE_SCROLL_LOCK_CLASS: 'mobile-dialog-box__scroll-lock',
  DIALOG_BOX_DATA_TAG: 'tiny-dialog-box',
  Mode: 'pc',
  SCROLL_LOCK_CLASS(mode) {
    return mode === this.Mode ? this.PC_SCROLL_LOCK_CLASS : this.MOBILE_SCROLL_LOCK_CLASS
  }
}
