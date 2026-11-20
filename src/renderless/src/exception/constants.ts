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
/** exception 静态常量：由组件层与 renderless 层直接共享导入，替代原 _constants prop 注入机制 */
export const $constants = {
  INTERNALCONFIG: {
    NODATA: 'ui.exception.nodata',
    NOPERM: 'ui.exception.noperm',
    WEAKNET: 'ui.exception.weaknet',
    NORESULT: 'ui.exception.noresult',
    NONEWS: 'ui.exception.nonews',
    PAGENOPERM: 'ui.exception.pagenoperm',
    PAGEWEAKNET: 'ui.exception.pageweaknet',
    PAGENOTHING: 'ui.exception.pagenothing',
    PAGESERVERERROR: 'ui.exception.pageservererror'
  },
  ICONCONFIG: {
    NODATA: 'icon-no-data',
    NOPERM: 'icon-no-perm',
    NONEWS: 'icon-no-news',
    WEAKNET: 'icon-weaknet',
    NORESULT: 'icon-no-result',
    PAGENOPERM: 'icon-page-noperm',
    PAGENOTHING: 'icon-page-nothing',
    PAGESERVERERROR: 'icon-page-servererror',
    PAGEWEAKNET: 'icon-page-weaknet'
  }
}
