import type { ExtractPropTypes } from 'vue'
import type { tagProps } from '../../components/tag/src'
import type { ISharedRenderlessFunctionParams } from './shared.type'

export interface ITagState {
  type: string | undefined
  show: boolean
  selected: boolean
  /** inject('tagSelectable') 注入的值，仅 base-select 场景提供 */
  tagSelectable?: boolean
  text?: string
  color?: string | unknown[]
  maxWidth: string | number
}

export interface ITagApi {
  state: ITagState
  handleClose: (event: Event) => void
  handleClick: (event: Event) => void
}

export type ITagProps = ExtractPropTypes<typeof tagProps>

export type ITagRenderlessParams = ISharedRenderlessFunctionParams<ITagProps, ITagState, ITagApi>
