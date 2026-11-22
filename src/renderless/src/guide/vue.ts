import Shepherd from 'shepherd.js'
import { offset } from '@floating-ui/dom'
import { createShepherd, mounted, beforeUnmount } from './index'

export const api = ['state']

export const renderless = (props, { reactive, onMounted, onBeforeUnmount, watch }, {}) => {
  const state = reactive({
    tour: null,
    tour1: null,
    showStep: false,
    domData: props.domData || null,
    mainAxis: props.mainAxis,
    crossAxis: props.crossAxis,
    alignmentAxis: props.alignmentAxis,
    popPosition: props.popPosition,
    modalOverlayOpeningPadding: props.modalOverlayOpeningPadding,
    modalOverlayOpeningRadius: props.modalOverlayOpeningRadius,
    arrow: props.arrow,
    lightClass: props.lightClass,
    showClose: props.showClose
  })

  let baseApi = {
    state,
    createShepherd: createShepherd({ state, props, Shepherd, offset })
  }

  const api = {
    ...baseApi,
    mounted: mounted({ state, api: baseApi }),
    beforeUnmount: beforeUnmount(state)
  }

  watch(
    () => props.showStep,
    (newVal) => {
      if (newVal) {
        api.createShepherd()
      } else {
        state?.tour?.hide()
      }
    }
  )

  onMounted(api.mounted)
  onBeforeUnmount(api.beforeUnmount)

  return api
}
