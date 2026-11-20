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
/** calendar-view 静态常量：由组件层与 renderless 层直接共享导入，替代原 _constants prop 注入机制 */
export const $constants = {
  DAY_START_TIME: '00:00:00',
  DAY_END_TIME: '23:59:59',
  DAY_START_HOUR: 8,
  DAY_END_HOUR: 18,
  CELL_HEIGHT: 20,
  WEDNESDAY: 3
}
