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

import { hooks } from '@tinysmall/common'
import { MsgQueue } from '@tinysmall/renderless/modal'
import TinyModal from './src/index'
import Popconfirm from '@tinysmall/popconfirm'
import { version } from 'package.json'
import type { App, ComponentPublicInstance, VNode } from '@tinysmall/common'

// 定义Modal选项接口
export interface ModalOptions {
  id?: string
  events?: {
    hide?: (params: any) => void
    confirm?: (params: any) => void
    show?: (params: any) => void
  }
  componentType?: 'alert' | 'confirm' | 'message' | 'popconfirm'
  message?: string | (() => VNode)
  title?: string
  showFooter?: boolean
  type?: string
  status?: string
  mask?: boolean
  lockView?: boolean
  showHeader?: boolean
  showClose?: boolean
  [key: string]: any
}

// 定义ModalPromise接口，扩展Promise
export interface ModalPromise extends Promise<string> {
  vm?: ComponentPublicInstance
}

// 定义TinyModal接口
export interface TinyModalInstance {
  alert: (message: string | ModalOptions, title?: string, options?: ModalOptions) => ModalPromise
  confirm: (message: string | ModalOptions, title?: string, options?: ModalOptions) => ModalPromise
  message: (message: string | ModalOptions, title?: string, options?: ModalOptions) => ModalPromise
  popconfirm: (message: string | ModalOptions, title?: string, options?: ModalOptions) => ModalPromise
  install: (Vue: any) => void
}

// 扩展TinyModal类型
const TinyModalComponent = TinyModal as unknown as TinyModalInstance & typeof TinyModal

TinyModalComponent.version = version

TinyModalComponent.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

export function Modal(options: ModalOptions): ModalPromise {
  const modalPromise = new Promise<string>((resolve) => {
    if (options && options.id && MsgQueue.some((comp) => comp.id === options.id)) {
      resolve('exist')
    } else {
      let events = options.events || {}
      let $modal: ComponentPublicInstance
      let app: App | undefined
      options.events = Object.assign({}, events, {
        hide(params: any) {
          events.hide && events.hide.call(this, params)
          // 组件内部通过 Teleport 渲染到 body，卸载应用即等价于原先手动移除根节点
          app?.unmount()
          resolve(params.type)
        },
        confirm(params: any) {
          events.confirm && events.confirm.call(this, params)
        },
        show(params: any) {
          events.show && events.show.call(this, params)
        }
      })

      app = hooks.createApp(options.componentType === 'popconfirm' ? Popconfirm : TinyModalComponent, options)
      $modal = app.mount(document.createElement('div'))

      const open = $modal[options.componentType === 'popconfirm' ? 'show' : 'open'] as Function
      if (open) {
        open()
      }
      setTimeout(() => {
        ;(modalPromise as ModalPromise).vm = $modal
      }, 0)
    }
  }) as ModalPromise
  return modalPromise
}
const modal = Modal
const types = ['alert', 'confirm', 'message', 'popconfirm'] as const
type ModalType = (typeof types)[number]

const defOpts: Record<ModalType, Partial<ModalOptions>> = {
  alert: {
    showFooter: true,
    type: 'alert'
  },
  confirm: {
    showFooter: true,
    status: 'question',
    type: 'confirm'
  },
  message: {
    mask: false,
    lockView: false,
    showHeader: false,
    showClose: false,
    type: 'message'
  },
  popconfirm: {}
}

types.forEach((type) => {
  TinyModalComponent[type] = Modal[type] = function (
    message: string | ModalOptions,
    title?: string,
    options?: ModalOptions
  ): ModalPromise {
    let opts: Partial<ModalOptions> = {}

    if (typeof message === 'object' && message !== null) {
      opts = message
    } else if (title) {
      opts = { title }
    }

    if (message === undefined || message === null) {
      message = ''
    }

    return modal({
      message: message.toString(),
      ...defOpts[type],
      ...opts,
      ...options,
      componentType: type
    })
  }
})

export const alert = (Modal as any).alert
export const message = (Modal as any).message
export const confirm = (Modal as any).confirm
export const popconfirm = (Modal as any).popconfirm

TinyModalComponent.install = function (Vue: any) {
  Vue.component(TinyModalComponent.name, TinyModalComponent)
}

export default TinyModalComponent
