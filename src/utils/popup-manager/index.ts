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

/**
 * 弹层基础服务（瘦身版）。
 *
 * 原有的共享遮罩（openModal/closeModal/modalStack）、实例注册表（register/getInstance）、
 * 全局 Esc 监听与 body 锁滚补偿已迁移：
 * - z-index 分配：@tinysmall/hooks 的 useZIndex（provide 链 + 全局水位）
 * - 遮罩：components/mask 的 Mask 组件（每实例遮罩）
 * - Esc / 栈顶语义：@tinysmall/hooks 的 usePopupStack
 * - body 锁滚：mask 内直接使用 @vueuse/core 的 useScrollLock
 *
 * 仅保留无 setup 上下文的命令式路径（loading / notify）所需的 nextZIndex——
 * 指令钩子/回调中无法使用 inject/provide。
 */
export const PopupManager = {
  step: 2,
  zIndex: 2000,
  nextZIndex: () => {
    const zIndex = PopupManager.zIndex
    PopupManager.zIndex += PopupManager.step
    return zIndex
  }
}
