import type { IBreadcrumbItemRenderlessParams } from '../../types'
import { $constants } from '../breadcrumb/constants'

export const linkClick =
  ({ state, props, refs, emit }: Pick<IBreadcrumbItemRenderlessParams, 'props' | 'state' | 'refs' | 'emit'>) =>
  (event: MouseEvent) => {
    const { option } = props
    const currentBreadcrumbItem = { link: refs.link, event, option }
    state.breadcrumbEmitter.emit($constants.EVENT_NAME.breadcrumbItemSelect, currentBreadcrumbItem)
    emit('select', currentBreadcrumbItem)
  }
