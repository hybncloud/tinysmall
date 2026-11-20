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
/** numeric 静态常量：由组件层与 renderless 层直接共享导入，替代原 _constants prop 注入机制 */
export const $constants = {
  MAX: 'aria-valuemax',
  MIN: 'aria-valuemin',
  VALUENOW: 'aria-valuenow',
  DISABLED: 'aria-disabled',
  KEY: 'role',
  VALUE: 'spinbutton',
  EVENT_NAME: {
    blur: 'form.blur',
    change: 'form.change'
  },
  COMPONENT_NAME: 'FormItem',
  FILTER_OPTION: [
    'ui.numeric.equalTo',
    'ui.numeric.notEqualTo',
    'ui.numeric.moreThan',
    'ui.numeric.moreThanOrEqualTo',
    'ui.numeric.lessThan',
    'ui.numeric.lessThanOrEqualTo',
    'ui.numeric.empty',
    'ui.numeric.nonEmpty'
  ]
}
