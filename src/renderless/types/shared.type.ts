import type * as hooks from 'vue'
import type { Emitter } from '../../common/index'

export type ISharedRenderlessParamHooks = typeof hooks

export interface ISharedRenderlessParamUtils {
  t: (path: string, options?: any) => string
  attrs: any
  nextTick: typeof hooks.nextTick
  vm: ITinyVm
  refs: Record<string, any>
  slots: hooks.Slots
  scopedSlots: hooks.Slots
  emit: (event: string, ...args: any[]) => void
  emitter: () => Emitter
}

export type ISharedRenderlessFunctionParams<P extends object = {}, S extends object = {}, A extends object = {}> = {
  api: A
  props: P
  state: S
} & ISharedRenderlessParamHooks &
  ISharedRenderlessParamUtils

export type ITinyVm<P extends object = {}, A extends object = {}> = {
  $attrs: Record<string, any>
  $el: HTMLElement
  $nextTick: typeof hooks.nextTick
  $emit: (event: string, ...args: any[]) => void
  $emitter: Emitter
  $off(): void
  $off(event: string): void
  $off(event: string, callback: Function): void
  $on: (event: string, callback: Function) => void
  $once: (event: string, callback: Function) => void
  $refs: Record<string, any>
  $slots: hooks.Slots
  $scopedSlots: hooks.Slots
} & P &
  A
