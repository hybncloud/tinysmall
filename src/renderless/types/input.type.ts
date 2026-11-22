import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { inputProps, $constants } from '../../components/input/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type useStorageBox from '../src/tall-storage/vue-storage-box'
import type {
  calculateNodeStyling,
  calcTextareaHeight,
  getInput,
  handleInput,
  calcIconOffset,
  focus,
  watchFormSelect,
  setNativeInputValue,
  resizeTextarea,
  updateIconOffset,
  hiddenPassword,
  inputStyle,
  clear
} from '../src/input'

export interface IInputState {
  mode: string
  /** form/form-item 通过 provide 注入的 vm（可能为 null，未处于表单内） */
  tinyForm: any
  formItem: any
  focused: boolean
  hovering: boolean
  isComposing: boolean
  passwordVisible: boolean
  boxVisibility: boolean
  textareaCalcStyle: object
  checkedLabel: string
  width: string
  sheetvalue: string | number | undefined
  inputSize: string
  showClear: boolean
  upperLimit: string
  textLength: string
  inputExceed: boolean
  formItemSize: string
  validateIcon: ComputedRef<typeof $constants.VALIDATE_ICON | null>
  showWordLimit: boolean
  inputDisabled: boolean
  validateState: string
  textareaStyle: object
  needStatusIcon: boolean
  showPwdVisible: boolean
  nativeInputValue: string
  isWordLimitVisible: boolean
  isDisplayOnly: boolean
  displayOnlyTooltip: string
  hiddenPassword: string
  displayOnlyText: string
  showDisplayOnlyBox: boolean
}

export type IInputRenderlessParamUtils = ISharedRenderlessParamUtils

export type IInputProps = ExtractPropTypes<typeof inputProps>

export type IInputConstants = typeof $constants

export interface IInputApi {
  state: IInputState
  isMemoryStorage: ReturnType<typeof useStorageBox>['isMemoryStorage']
  searchMemory: ReturnType<typeof useStorageBox>['searchMemory']
  setNativeInputValue: ReturnType<typeof setNativeInputValue>
  resizeTextarea: ReturnType<typeof resizeTextarea>
  updateIconOffset: ReturnType<typeof updateIconOffset>
  hiddenPassword: ReturnType<typeof hiddenPassword>
  watchFormSelect: ReturnType<typeof watchFormSelect>
  getInput: ReturnType<typeof getInput>
  calcTextareaHeight: ReturnType<typeof calcTextareaHeight>
  calculateNodeStyling: ReturnType<typeof calculateNodeStyling>
  handleInput: ReturnType<typeof handleInput>
  calcIconOffset: ReturnType<typeof calcIconOffset>
  focus: ReturnType<typeof focus>
  inputStyle: ReturnType<typeof inputStyle>
  clear: ReturnType<typeof clear>
}

export type IInputRenderlessParams = ISharedRenderlessFunctionParams<IInputProps, IInputState, IInputApi>

export interface IInputClassPrefixConstants {
  Input: string
  InputGroup: string
}

export interface IInputEventNameConstants {
  change: string
  blur: string
}
