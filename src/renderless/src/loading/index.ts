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

import type { ILoadingRenderlessParamUtils, ILoadingRenderlessParams, ILoadingState } from '../../types/loading.type'
import { afterLeave } from './after-leave'
import { removeClass } from '@tinysmall/utils'
import { $constants } from './constants'

export const handleAfterLeave =
  (vm: { $emit: (eventname: string, ...args: any[]) => void }) =>
  (): void => {
    // 走 vm.$emit 双通道：既触发组件声明的 after-leave 事件，也通知 $emitter 总线上的订阅者（afterLeave 里的 $once）
    vm.$emit('after-leave')
  }

export const setText =
  (state: ILoadingState) =>
  (text: string): void => {
    state.text = text
  }

export const close =
  ({ state, vm }: Pick<ILoadingRenderlessParams, 'state' | 'vm'>) =>
  (): void => {
    afterLeave(
      vm,
      () => {
        const target = state.fullscreen || state.body ? document.body : state.target

        if (vm.$el && vm.$el.parentNode) {
          removeClass(target, $constants.PARENT_RELATIVE_CLS)
          removeClass(target, $constants.PARENT_HIDDEN_CLS)
          vm.$el.parentNode.removeChild(vm.$el)
        }

        state.closed = true
      },
      300
    )

    state.visible = false
  }
