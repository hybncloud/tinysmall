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
/** timeline-item 静态常量：由组件层与 renderless 层直接共享导入，替代原 _constants prop 注入机制 */
export const $constants = {
  PROCESS_DONE_CLS: 'process-done',
  PROCESS_CUR_CLS: 'process-current',
  PROCESS_WAIT_CLS: 'process-wait',
  PROCESS_DISABLED_CLS: 'process-disabled',
  PROCESS_ERROR_CLS: 'process-error',
  STACK_NODES_MAX: 7,
  LIMITED_STACK_NODES: 3
}
