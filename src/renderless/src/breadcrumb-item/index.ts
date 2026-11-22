import type { IBreadcrumbItemProps } from '../../types'

export const linkClick =
  ({
    state,
    props,
    refs,
    router,
    emit,
    constants
  }: Pick<IBreadcrumbItemProps, 'props' | 'refs' | 'router' | 'emit' | 'constants'> & { state: any }) =>
  (event: MouseEvent) => {
    const { replace, to, option } = props
    const currentBreadcrumbItem = { link: refs.link, replace, to, event, option }

    state.breadcrumbEmitter.emit(constants.EVENT_NAME.breadcrumbItemSelect, currentBreadcrumbItem)
    emit('select', currentBreadcrumbItem)

    if (!to || !router) {
      return
    }

    replace ? router.replace(to) : router.push(to)
  }
