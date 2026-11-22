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
  IBreadcrumbItemProps,
  IBreadcrumbItemApi,
  IBreadcrumbItemRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '../../types'
import { linkClick } from './index'


export const renderless = (
  props: IBreadcrumbItemProps,
  { reactive, inject, computed }: ISharedRenderlessParamHooks,
  { refs, emit }: IBreadcrumbItemRenderlessParamUtils
) => {
  const state = reactive({
    size: inject('size', null),
    /** breadcrumb 通过 provide('breadcrumbEmitter'/'breadcrumb') 注入的 emitter 与 vm */
    breadcrumbEmitter: inject('breadcrumbEmitter'),
    breadcrumb: inject('breadcrumb'),
    separator: computed(() => state.breadcrumb.separator || '/')
  })
  const api: IBreadcrumbItemApi = {
    state,
    linkClick: linkClick({ state, props, refs, emit })
  }

  return api
}
