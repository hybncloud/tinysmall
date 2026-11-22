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
import type {
  ILinkState,
  ILinkProps,
  ILinkRenderlessParamUtils,
  ISharedRenderlessParamHooks,
  ILinkApi
} from '../../types'
import { xss } from '@tinysmall/utils'
import { handleClick } from './index'


export const renderless = (
  props: ILinkProps,
  { inject, reactive, computed }: ISharedRenderlessParamHooks,
  { emit }: ILinkRenderlessParamUtils
): ILinkApi => {
  const state: ILinkState = reactive({
    // form 通过 provide('form') 暴露 vm，替代挂在链式 parent 上的 tinyForm 缓存；后续统一从 state.tinyForm 取用
    tinyForm: inject('form', null),
    formDisabled: computed(() => (state.tinyForm || {}).disabled),
    disabled: computed(() => props.disabled || state.formDisabled),
    href: computed(() => xss.filterUrl(props.href))
  })

  return {
    state,
    handleClick: handleClick({ emit, props, state })
  }
}
