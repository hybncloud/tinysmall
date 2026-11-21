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

import { $constants } from './constants'
import type {
  IAlertApi,
  IAlertProps,
  IAlertState,
  ISharedRenderlessParamHooks,
  IAlertRenderlessParamUtils
} from '../../types'
import {
  computedGetIcon,
  computedGetTitle,
  computedStyle,
  computedClass,
  handleClose,
  handleHeaderClick,
  watchAutoHide
} from './index'
import { nanoid } from '@tinysmall/utils'

export const api = ['handleClose', 'state', 'handleHeaderClick']

const initState = ({ api, computed, reactive }): IAlertState  => {
  return reactive({
    show: true,
    contentVisible: false,
    contentDescribeHeight: 0,
    contentDefaultHeight: 0,
    contentMaxHeight: $constants.CONTENT_MAXHEUGHT,
    scrollStatus: false,
    getIcon: computed(() => api.computedGetIcon()),
    getTitle: computed(() => api.computedGetTitle()),
    alertClass: computed(() => api.computedClass()),
    alertStyle: computed(() => api.computedStyle()),
    titleId: `tiny-alert-title-${nanoid.api.nanoid(8)}`,
    contentId: `tiny-alert-description-${nanoid.api.nanoid(8)}`
  })
}

const initApi = ({ api, state, props, t, emit, vm }): void  => {
  Object.assign(api, {
    state,
    computedGetIcon: computedGetIcon({ props }),
    computedGetTitle: computedGetTitle({ props, t }),
    computedClass: computedClass({ props }),
    computedStyle: computedStyle({ props }),
    handleClose: handleClose({ emit, state }),
    handleHeaderClick: handleHeaderClick({ state, props, vm }),
    watchAutoHide: watchAutoHide({ api, props })
  })
}

const initWatcher = ({ watch, props, api }) => {
  watch(() => props.autoHide, api.watchAutoHide, { immediate: true })
}

export const renderless = (
  props: IAlertProps,
  { computed, reactive, watch }: ISharedRenderlessParamHooks,
  { t, emit, vm }: IAlertRenderlessParamUtils
): IAlertApi => {
  const api = {} as IAlertApi
  const state: IAlertState = initState({ api, computed, reactive })
  initApi({ api, state, props, t, emit, vm })
  initWatcher({ watch, props, api })

  return api
}
