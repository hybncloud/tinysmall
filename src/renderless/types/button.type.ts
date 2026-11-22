import type { ExtractPropTypes } from 'vue'
import type { buttonProps } from '../../components/button/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { clearTimer, handleClick } from '../src/button'

export interface IButtonState {
  timer: number
  disabled: boolean
  plain: boolean
  round: boolean
  formDisabled: boolean
  buttonDisabled: boolean
}

export type IButtonRenderlessParams = ISharedRenderlessFunctionParams<IButtonProps, IButtonState>

export type IButtonProps = ExtractPropTypes<typeof buttonProps>

export interface IButtonApi {
  state: IButtonState
  clearTimer: ReturnType<typeof clearTimer>
  handleClick: ReturnType<typeof handleClick>
}

export type IButtonRenderlessParamUtils = ISharedRenderlessParamUtils
