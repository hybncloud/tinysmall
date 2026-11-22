import type { ISkeletonItemProps, ISharedRenderlessParamHooks, ISkeletonItemState, ISkeletonItemApi } from '../../types'


export const renderless = (props: ISkeletonItemProps, { reactive, inject }: ISharedRenderlessParamHooks) => {
  const state: ISkeletonItemState = reactive({
    isActive: inject('animated', false)
  })

  const api: ISkeletonItemApi = {
    state
  }
  return api
}
