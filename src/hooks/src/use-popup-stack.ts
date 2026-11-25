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

import { computed, shallowRef, toValue, watch } from 'vue'
import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import { onKeyStroke, tryOnScopeDispose } from '@vueuse/core'

export interface IPopupStackOptions {
  visible: MaybeRefOrGetter<boolean>
  close: () => void
  closeOnPressEscape?: MaybeRefOrGetter<boolean>
}

export interface IPopupStackReturn {
  isTop: ComputedRef<boolean>
}

interface IPopupStackItem {
  close: () => void
}

const stack = shallowRef<IPopupStackItem[]>([])

export const usePopupStack = (options: IPopupStackOptions): IPopupStackReturn => {
  const item: IPopupStackItem = { close: options.close }

  const isTop = computed(() => stack.value[stack.value.length - 1] === item)

  const removeFromStack = () => {
    if (stack.value.includes(item)) {
      stack.value = stack.value.filter((self) => self !== item)
    }
  }

  // 打开入栈（重复打开时重新置顶），关闭出栈
  watch(
    () => toValue(options.visible),
    (val) => {
      removeFromStack()
      if (val) {
        stack.value = [...stack.value, item]
      }
    },
    { immediate: true }
  )

  // 卸载兜底出栈，防止关闭与卸载路径遗漏
  tryOnScopeDispose(removeFromStack)

  // Esc：每个弹窗都有自己的监听，栈顶判断保证嵌套 / 兄弟弹窗时只关最上层
  onKeyStroke('escape', (event) => {
    if (!isTop.value || !toValue(options.visible)) return
    if (toValue(options.closeOnPressEscape ?? true) === false) return
    event.preventDefault()
    item.close()
  })

  return { isTop }
}
