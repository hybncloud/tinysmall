import type {
  IUploadListState,
  IUploadListApi,
  IUploadListProps,
  ISharedRenderlessParamHooks,
  IUploadListRenderlessParamUtils,
  IFileUploadModalVm,
  IFileUploadConstants
} from '../../types'
import { $constants } from '../file-upload/constants'
import {
  parsePercentage,
  handleClick,
  picturefilePreview,
  getDeleteData,
  downloadFile,
  play,
  pause,
  handleLoadedmetadata,
  handleTimeupdate,
  destroyed,
  showOperatePanel,
  getFileType,
  getFileIcon,
  mounted,
  calcUploadListLiWidth,
  reUpload,
  remove,
  handleTriggerClick,
  chooseFile,
  calcVisible,
  getNotSuccessFiles
} from './index'
import { getToken, initService } from '../file-upload'
import { formatFileSize } from '@tinysmall/utils'
import { getApi } from '../file-upload/vue'
import { isServer } from '@tinysmall/utils'

export const api = [
  't',
  'state',
  'parsePercentage',
  'handleClick',
  'handlePreview',
  'picturefilePreview',
  'getDeleteData',
  'downloadFile',
  'play',
  'pause',
  'handleLoadedmetadata',
  'handleTimeupdate',
  'showOperatePanel',
  'getFileType',
  'getFileIcon',
  'reUpload',
  'remove',
  'handleTriggerClick',
  'chooseFile',
  'formatFileSize'
]

export const renderless = (
  props: IUploadListProps,
  { reactive, onMounted, onUnmounted, watch, inject, computed }: ISharedRenderlessParamHooks,
  { t, parent, emit, service, vm, nextTick }: IUploadListRenderlessParamUtils,
  { Modal }: IFileUploadModalVm
): IUploadListApi => {
  const api = { getApi } as IUploadListApi
  parent = inject('uploader')
  const constants = !isServer ? ($constants as IFileUploadConstants) : null
  const $service = initService({ props, service })

  const state = reactive({
    focusing: false,
    shows: false,
    progressType: 'line',
    progressWidth: 68,
    progressStrokeWidth: 4,
    tooltipDisabled: false,
    closeComponent: 'icon-del',
    preViewComponent: 'icon-fullscreen-left',
    failUploadFileCount: computed(() =>
      props.files.reduce((total, item) => (total += item.status === 'fail' ? 1 : 0), 0)
    ),
    startPostion: 0,
    screenType: true,
    showPanel: false,
    showTriggerPanel: false,
    triggerClickType: '',
    showAudioPanel: false,
    files: computed(() => api.getNotSuccessFiles()),
    currentFile: null
  }) as IUploadListState

  parent.getToken = getToken({ props: parent, state: parent.state, t, Modal })

  Object.assign(api, {
    state,
    getDeleteData: getDeleteData(emit),
    parsePercentage: parsePercentage(),
    downloadFile: downloadFile($service),
    picturefilePreview: picturefilePreview(state),
    handleClick: handleClick({ props, api, parent }),
    play: play({ vm, api, props }),
    pause: pause({ vm, props }),
    handleLoadedmetadata: handleLoadedmetadata({ vm }),
    handleTimeupdate: handleTimeupdate(),
    destroyed: destroyed({ props, vm }),
    showOperatePanel: showOperatePanel({ state }),
    getFileType: getFileType(),
    getFileIcon: getFileIcon({}),
    mounted: mounted({ api, vm }),
    calcUploadListLiWidth: calcUploadListLiWidth({ vm, nextTick, props}),
    reUpload: reUpload({ emit, props, parent }),
    remove: remove({ emit }),
    handleTriggerClick: handleTriggerClick({ state, props }),
    chooseFile: chooseFile({ state}),
    calcVisible: calcVisible({ props, emit }),
    getNotSuccessFiles: getNotSuccessFiles({ props}),
    formatFileSize
  })

  props.listType === constants.LIST_TYPE.DRAG_SINGLE &&
    watch(
      () => props.files && props.files[0],
      (file) => {
        if (file && file.status === constants.FILE_STATUS.FAIL) {
          setTimeout(() => {
            api.remove({ file })
          }, 2000)
        }
      },
      { immediate: true, deep: true }
    )

  watch(() => props.files, api.calcUploadListLiWidth)

  if (props.mode === constants.MODE.BUBBLE && props.listType === constants.LIST_TYPE.TEXT) {
    constants && watch(() => props.files, api.calcVisible, { immediate: true, deep: true })
  }

  onMounted(api.mounted)

  onUnmounted(api.destroyed)

  return api
}
