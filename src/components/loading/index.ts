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
import service from './src/service'
import directive from './src/directive'
import { version } from 'package.json'
import type { App } from '@tinysmall/common'
import type { ILoadingState } from '@tinysmall/renderless/types/loading.type'

// 定义LoadingConfig接口
export interface LoadingConfig {
  text?: string | null
  body?: boolean
  lock?: boolean
  customClass?: string
  fullscreen?: boolean
  iconSize?: string
  target?: HTMLElement | string
  size?: string
  loadingImg?: string
}

// 定义LoadingInstance接口
export interface LoadingInstance {
  state: ILoadingState
  $el: HTMLElement
  originalPosition?: string
  originalOverflow?: string
}

// 定义Loading服务的类型
export type LoadingService = (config?: LoadingConfig) => LoadingInstance

// 定义LoadingPlugin接口
export interface LoadingPlugin {
  install: (app: App) => void
  service: LoadingService
  directive: any
  version: string
}

const Loadings: LoadingPlugin = {
  install(app: App) {
    app.directive('loading', directive)
  },
  service,
  directive,
  version
}

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    // @ts-expect-error window.Vue可能是Vue2或Vue3实例，类型兼容性在运行时处理
    Loadings.install(window.Vue)
  }
}

export default Loadings
