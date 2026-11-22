import type { Component, ExtractPropTypes, ComputedRef } from 'vue'
import type { pickerProps } from '../../components/picker/src/type'
import type { ISharedRenderlessParamUtils } from './shared.type'

export type IPickerProps = ExtractPropTypes<typeof pickerProps>

export interface IPickerApi {
  initGlobalTimezone: () => void
  setInputPaddingLeft: () => void
  handleClickIcon: (event: MouseEvent) => void
  destroyPopper: () => void
  getValueEmpty: () => boolean
  computedTriggerClass: () => string
  getMode: () => string
  computedHaveTrigger: () => boolean
  displayValue: () => string
  parsedValue: () => string | string[]
  firstInputId: () => { id: string }
  secondInputId: () => { id: string }
  getType: () => string
  getTimezone: () => {
    from: number
    to: number
    isServiceTimezone: boolean
  }
  getValueFormat: () => string
  computedFormat: () => string
  getPanel: (type: string) => Component
  watchPickerVisible: (value: boolean) => void
  watchIsRange: (value: boolean) => void
  watchModelValue: (value: Date | Date[], oldValue: Date | Date[]) => boolean
  updateOptions: () => void
  handleSelectChange: (params: { tz?: unknown; date?: unknown }) => boolean
  handleSelectRange: (start: number, end: number, pos?: string) => void
}

export interface IPickerState {
  picker: HTMLElement | null
  panel: HTMLElement

  historyValue: string[]
  historyInput: string[]
  historyUserInput: string[]
  historyUserValue: string[]
  startStatus: boolean
  endStatus: boolean
  date: null
  pickerVisible: boolean
  showClose: boolean
  userInput: null
  valueOnOpen: null
  popperElm: HTMLElement | null
  unwatchPickerOptions: null
  ranged: boolean
  reference: HTMLElement
  formDisabled: boolean
  refInput: ComputedRef<HTMLElement[]>
  valueIsEmpty: boolean
  triggerClass: string
  selectionMode: string
  haveTrigger: boolean
  displayValue: string
  parsedValue: ComputedRef<string | string[]>
  pickerSize: string
  pickerDisabled: boolean
  firstInputId: ComputedRef<{ id: string }>
  secondInputId: ComputedRef<{ id: string }>
  type: ComputedRef<string[]>
  timezone: ComputedRef<{
    from: number
    to: number
    isServiceTimezone: boolean
  }>
  valueFormat: string
  format: string
  labelTooltip: string
  displayOnlyTooltip: string
  isDisplayOnly: boolean
}

export type IPickerRenderlessParamUtils = ISharedRenderlessParamUtils
