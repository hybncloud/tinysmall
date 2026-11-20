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
/** base-select 静态常量：由组件层与 renderless 层直接共享导入，替代原 _constants prop 注入机制 */
export const $constants = {
  CLASS: {
    SelectDropdownWrap: '.tiny-select-dropdown__wrap',
    IsReverse: 'is-reverse'
  },
  I18N: {
    noData: 'ui.select.noData',
    noMatch: 'ui.select.noMatch',
    loading: 'ui.select.loading'
  },
  COMPONENT_NAME: {
    Form: 'Form',
    Select: 'Select',
    Option: 'Option',
    FormItem: 'FormItem',
    OptionGroup: 'OptionGroup',
    SelectDropdown: 'SelectDropdown'
  },
  EVENT_NAME: {
    removeTag: 'remove-tag',
    formChange: 'form.change',
    formBlur: 'form.blur',
    queryChange: 'queryChange',
    setSelected: 'setSelected',
    updatePopper: 'updatePopper',
    destroyPopper: 'destroyPopper',
    visibleChange: 'visible-change',
    handleOptionClick: 'handleOptionClick',
    handleGroupDisabled: 'handleGroupDisabled',
    initValue: 'initValue'
  },
  TYPE: {
    Grid: 'grid',
    Tree: 'tree'
  },
  MAX_WIDTH: 132,
  RECYCLE: {
    SAAS_HEIGHT: 220,
    AURORA_HEIGHT: 180,
    ITEM_HEIGHT: 34,
    SAFE_MARGIN: 4
  },
  SAAS_SIZE: {
    mini: 24,
    small: 28,
    medium: 32
  },
  AURORA_SIZE: {
    mini: 24,
    small: 36,
    medium: 42
  },
  SPACING_HEIGHT: 0,
  MAX_VISIBLE_ROWS: 1 // 多选默认最大显示行数，超出后自动隐藏
}
