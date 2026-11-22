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
import type { App } from '@tinysmall/common'
import NotifyConstructor from './src/pc.vue'
import '@tinysmall/theme/notify/index.less'
import { IconSuccess, iconError, IconPrompt, iconWarningTriangle } from '@tinysmall/icon'

export type NotifyType = 'warning' | 'error' | 'info' | 'success'
export type NotifyPosition = 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'

export interface NotifyOptions {
  type?: NotifyType
  duration?: number
  position?: NotifyPosition
  statusIcon?: any
  offset?: number
  verticalOffset?: number
  debounceDelay?: number
  onClose?: (instance: NotifyInstance) => void
  [key: string]: any
}

export interface NotifyState {
  position: NotifyPosition
  verticalOffset: number
  visible: boolean
  verticalProperty: string
}

export interface NotifyInstance {
  id: string
  /** Teleport 根节点的占位注释节点，真实节点请使用 dom */
  $el: HTMLElement
  dom: HTMLElement
  $refs: Record<string, any>
  state: NotifyState
  position: NotifyPosition
  getZindex: () => number
  close: (id: string) => void
}

let seed = 1
let instances: NotifyInstance[] = []
// 记录实例对应的应用，关闭时通过卸载应用移除 Teleport 到 body 的节点
const instanceApps = new WeakMap<NotifyInstance, App>()

const IconMap: Record<NotifyType, any> = {
  warning: iconWarningTriangle(),
  error: iconError(),
  info: IconPrompt(),
  success: IconSuccess()
}

const durationMap: Record<NotifyType, number> = {
  info: 5000,
  success: 5000,
  warning: 10000,
  error: 10000
}

const positionList: NotifyPosition[] = ['top-right', 'bottom-right', 'top-left', 'bottom-left']

const debounce = (fn: (options: NotifyOptions) => NotifyInstance, debounceDelay: number) => {
  let timer: NodeJS.Timeout | null = null

  return async function (this: any, ...args: any[]) {
    if (timer) {
      clearTimeout(timer)
    }

    let instance: NotifyInstance | null = null

    await new Promise<void>((resolve) => {
      timer = setTimeout(() => {
        instance = fn.apply(this, args)
        timer = null
        resolve()
      }, debounceDelay)
    })

    return instance
  }
}

const notify = (options: NotifyOptions): NotifyInstance => {
  if (!Object.keys(IconMap).includes(options.type as NotifyType)) {
    options.type = 'info'
  }

  options.duration = options.duration ? options.duration : durationMap[options.type as NotifyType]
  options.position = !positionList.includes(options.position as NotifyPosition) ? 'bottom-right' : options.position
  !options.statusIcon && options.type && (options.statusIcon = IconMap[options.type as NotifyType])

  const id = 'notify_' + seed++
  const userOnClose = options.onClose
  const position = options.position as NotifyPosition

  options.onClose = function () {
    Notify.close(id, userOnClose)
  }

  const app = hooks.createApp(NotifyConstructor, options)
  const instance = app.mount(document.createElement('div')) as unknown as NotifyInstance
  instance.id = id
  instanceApps.set(instance, app)

  // 组件内部通过 Teleport 渲染到 body，此时 $el 是占位注释节点，真实节点取自组件内的 ref
  instance.dom = instance.$refs?.notify as HTMLElement

  let verticalOffset = options.offset || 0

  instances
    .filter((item) => item.state.position === position)
    .forEach((item) => {
      verticalOffset += item.dom.offsetHeight + 16
    })

  verticalOffset += options.verticalOffset ? Number(options.verticalOffset) : 16
  instances.push(instance)

  instance.dom.style.zIndex = instance.getZindex().toString()
  instance.state.verticalOffset = verticalOffset
  instance.state.visible = true

  if (verticalOffset + instance.dom.offsetHeight > window.innerHeight) {
    instances[0] && instances[0].close(instances[0].id)
  }

  return instance
}

const Notify = (options: NotifyOptions): NotifyInstance | ((options: NotifyOptions) => Promise<NotifyInstance>) => {
  let { debounceDelay } = options

  if (debounceDelay) {
    return debounce(() => notify(options), debounceDelay)
  } else {
    return notify(options)
  }
}

Notify.close = function (id: string, userOnClose?: (instance: NotifyInstance) => void): void {
  let index = -1
  let len = instances.length
  let instance: NotifyInstance | undefined

  for (let i = 0; i < len; i++) {
    let tmp = instances[i]
    if (tmp.id === id) {
      index = i
      instance = tmp
      break
    }
  }

  if (!instance) {
    return
  }

  typeof userOnClose === 'function' && userOnClose(instance)
  let lastHeight = instance.dom.offsetHeight
  // 卸载应用即可移除 Teleport 到 body 的节点，替代原先的手动 removeChild
  instanceApps.get(instance)?.unmount()
  instanceApps.delete(instance)
  instances.splice(index, 1)

  if (len <= 1) {
    return
  }

  let removedPosition = instance.position
  let copys = instances.slice(index)
  let verticalOffset = instance.state.verticalOffset ? Number(instance.state.verticalOffset) : 16

  instances
    .filter((item) => item.state.position === removedPosition)
    .forEach((item) => {
      item.state.verticalOffset = verticalOffset
      verticalOffset += item.dom.offsetHeight + 16
    })

  copys.forEach((copy) => {
    if (copy.position === removedPosition) {
      let height = parseInt(copy.dom.style[instance.state.verticalProperty], 10) - lastHeight - 16
      copy.dom.style[instance.state.verticalProperty] = height + 'px'
    }
  })
}

Notify.closeAll = function (): void {
  let copys = instances.slice(0)

  copys = copys.reverse()
  copys.forEach((instance) => {
    instance.close()
  })
}

export default Notify
