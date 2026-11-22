import type { ExtractPropTypes } from 'vue'
import type { linkProps } from '../../components/link/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type ILinkProps = ExtractPropTypes<typeof linkProps>

export interface ILinkState {
  formDisabled: boolean
  disabled: boolean
  href: string
}

export interface ILinkApi {
  state: ILinkState
  handleClick: (event: MouseEvent) => void
}
export type ILinkRenderlessParams = ISharedRenderlessFunctionParams<ILinkProps, ILinkState, ILinkApi>

export type ILinkRenderlessParamUtils = ISharedRenderlessParamUtils
