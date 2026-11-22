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
import type { CSSProperties } from 'vue'
import type { IAlertRenderlessParams } from '../../types'

export const ALERT_TIMEOUT = 2000

export const watchAutoHide =
  ({ api, props }: Pick<IAlertRenderlessParams, 'api' | 'props'>) =>
  (newVal: boolean) => {
    if (props.autoHide && newVal) {
      const timer = setTimeout(() => {
        api.handleClose()
        clearTimeout(timer)
      }, ALERT_TIMEOUT)
    }
  }

export const computedClass =
  ({}) =>
  (): string[] => {
    return []
  }

export const computedStyle =
  ({}) =>
  (): CSSProperties | null => {
    return null
  }

export const handleClose =
  ({ emit, state }: Pick<IAlertRenderlessParams, 'emit' | 'state'>) =>
  () => {
    state.show = false
    emit('close')
  }

export const computedGetIcon =
  ({ props }: Pick<IAlertRenderlessParams, 'props'>) =>
  () => {
    return props.icon || $constants.ICON_MAP[props.type]
  }

export const computedGetTitle =
  ({ t, props }: Pick<IAlertRenderlessParams, 't' | 'props'>) =>
  () =>
    props.title || t($constants.TITLE_MAP[props.type])

export const handleHeaderClick =
  ({ state, props, vm }: Pick<IAlertRenderlessParams, 'state' | 'props' | 'vm'>) =>
  () => {
    if (props.showFoldable) {
      state.contentVisible = !state.contentVisible
    }
    if (vm.$refs.ContentDescribe) {
      state.contentDescribeHeight = vm.$refs.ContentDescribe.scrollHeight

      if (state.contentDescribeHeight > state.contentMaxHeight) {
        state.scrollStatus = true
      }
    }
    if (vm.$refs.ContentDefault) {
      state.contentDefaultHeight = vm.$refs.ContentDefault.scrollHeight

      if (state.contentDefaultHeight > state.contentMaxHeight) {
        state.scrollStatus = true
      }
    }
  }
