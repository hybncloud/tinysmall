/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import type {
  IFileUploadState,
  IFileUploadApi,
  IFileUploadProps,
  ISharedRenderlessParamHooks,
  IFileUploadRenderlessParamUtils,
  IFileUploadModalVm,
  IFileUploadService,
  IFileUploadStreamsaver
} from '../../types'

import { downloadFile as ordinaryDownload } from '../upload-list'
import { formatFileSize } from '@tinysmall/utils'

import {
  initService,
  getNewTabPreviewUrl,
  previewFile,
  getToken,
  downloadFile,
  downloadFileSingleInner,
  batchSegmentUpload,
  segmentUpload,
  sliceChunk,
  segmentUploadInit,
  largeDocumentUpload,
  getFormData,
  abort,
  clearFiles,
  computedUploadDisabled,
  getFile,
  handleStart,
  handleProgress,
  handleSuccess,
  handleError,
  handleRemove,
  handleReUpload,
  handleReUploadTotal,
  onBeforeDestroy,
  submit,
  watchListType,
  watchFileList,
  handleClick,
  handleFileClick,
  getFileUploadUrl,
  updateUrl,
  previewImage,
  startUpload,
  getDialogConfigObj,
  computeDocChunkSize,
  updateFile,
  getPreviewUrlSync,
  beforeUpload,
  computedUploadingSize,
  clearUploadingFiles,
  calcUploadingFilesInfo,
  properFileSize,
  addFileToList,
  getDownloadFileInfo,
  largeDocumentDownload,
  sliceDownloadChunk,
  batchSegmentDownload,
  downloadFileInner,
  setWriterFile,
  afterDownload,
  getFileHash,
  modifyServiceUrlSingle,
  getKiaScanTip,
  downloadFileSingle,
  downloadFileBatch,
  downloadFileSingleHwh5,
  downloadAsyncPackage,
  validateDownloadStatus,
  mounted,
  handleChange,
  previewFileSingle,
  previewFileBatch,
  previewImageSingle,
  previewImageBatch,
  abortDownload,
  createDownloadCancelToken,
  handleClickFileList,
  computedSourcetype,
  getFileSourceType,
  encryptDialogConfirm,
  handleTriggerClick,
  closeRecordPanel,
  getTipMessage
} from './index'
import { isEmptyObject } from '@tinysmall/utils'

export const api = [
  'state',
  'getNewTabPreviewUrl',
  'previewFile',
  'downloadFile',
  'abort',
  'clearFiles',
  'getFile',
  'handleStart',
  'handleProgress',
  'handleSuccess',
  'handleError',
  'handleRemove',
  'handleReUpload',
  'handleReUploadTotal',
  'submit',
  'handleClick',
  'handleFileClick',
  'getFileUploadUrl',
  'updateUrl',
  'previewImage',
  'updateFile',
  'handleChange',
  'abortDownload',
  'handleClickFileList',
  'handleTriggerClick',
  'closeRecordPanel',
  'encryptDialogConfirm',
  'formatFileSize',
  'getTipMessage'
]

const initState = ({
  api,
  reactive,
  computed,
  inject,
  ref,
  vm,
  props,
  httpRequest,
  markRaw,
  service
}): IFileUploadState  => {
  const state = reactive({
    url: '',
    updateId: '',
    currentDownloadFiles: '',
    tempIndex: 1,
    draging: false,
    uploadFiles: [],
    dragOver: false,
    httpRequest: markRaw(httpRequest),
    form: inject('form', ref({ default: '' })),
    docSize: 0, // unit(B)
    chunkSize: 0,
    chunkBatchLimit: 5,
    downloadChunkLimit: 5,
    batchQueue: {},
    batchQueueListen: {},
    batchCancelToken: {},
    replayAtoms: {},
    chunkUploadUrl: '',
    largeFileInfo: {},
    headers: {},
    accept: props.accept || '',
    edmToken: {},
    isSuccess: false,
    singleMaxSize: 200,
    formData: {},
    showPreview: false,
    iframeUrl: '',
    fileWater: false,
    tabUrl: '',
    cacheDocuments: {},
    isEdm: computed(() => !isEmptyObject(props.edm)),
    uploadDisabled: computed(() => api.computedUploadDisabled()),
    dialogConfigObj: computed(() => api.getDialogConfigObj()),
    uploadingFiles: [],
    currentUploadingFileUids: [],
    uploadingSize: computed(() => api.computedUploadingSize()),
    isEntireCheckCode: computed(() => !('isEntireCheckCode' in props.edm && props.edm.isEntireCheckCode !== true)),
    downloadBatchQueue: {},
    downloadBatchQueueListen: {},
    downloadChunkFile: {},
    downloadReplayAtoms: {},
    errorStatusCodes: [0, 401, 429], // 0：上传异常 401：没权限（token过期）429：超限
    hasFileInfoInterface: computed(() => service.setting.services.EDM && service.setting.services.EDM.DocumentInfoUrl),
    currentDownloadFile: '',
    isDragover: false,
    downloadCancelToken: {}, // 取消下载token
    downloadCancelData: {}, // 取消下载时需要清空的缓存数据
    isHwh5: computed(() => !isEmptyObject(props.hwh5)),
    selected: null,
    types: computed(() => api.computedSourcetype()),
    triggerClickType: '',
    visible: false,
    downloadParamsWhitelist: ['docId', 'wmType', 'docVersion'],
    encryptDialogConfig: {
      show: false,
      selectFileMethod: null
    }
  })

  return state
}

const initApi = ({ api, state, props, vm, $service, t, Modal, emit }) => {
  Object.assign(api, {
    state,
    sliceChunk: sliceChunk({ state }),
    getFormData: getFormData({ props, state }),
    abort: abort({ vm, state }),
    handleClick: handleClick({ vm }),
    handleFileClick: handleFileClick({ props, emit }),
    getFile: getFile(state),
    clearFiles: clearFiles(state),
    watchFileList: watchFileList({ state, props, api }),
    watchListType: watchListType({ state, api }),
    onBeforeDestroy: onBeforeDestroy(state),
    computedUploadDisabled: computedUploadDisabled({ props, state }),
    computedUploadingSize: computedUploadingSize({ state}),
    getFileUploadUrl: getFileUploadUrl($service),
    getToken: getToken({ props, state, t, Modal }),
    getDialogConfigObj: getDialogConfigObj({ props, state, t}),
    computeDocChunkSize: computeDocChunkSize({ props, state}),
    updateFile: updateFile({ vm }),
    getPreviewUrlSync: getPreviewUrlSync({ props, state }),
    ordinaryDownload: ordinaryDownload($service),
    clearUploadingFiles: clearUploadingFiles({ state }),
    calcUploadingFilesInfo: calcUploadingFilesInfo({ state}),
    properFileSize: properFileSize({ props, state, api, Modal, t }),
    mounted: mounted({ vm, state }),
    previewFileSingle: previewFileSingle({ api, state, props, service: $service }),
    previewFileBatch: previewFileBatch({ service: $service, props, state, api }),
    previewImageSingle: previewImageSingle({ state, props, service: $service }),
    previewImageBatch: previewImageBatch({ service: $service, api }),
    abortDownload: abortDownload({ state }),
    createDownloadCancelToken: createDownloadCancelToken({ state, service: $service }),
    computedSourcetype: computedSourcetype({ props}),
    getFileSourceType: getFileSourceType({ state, props}),
    encryptDialogConfirm: encryptDialogConfirm({ state }),
    getTipMessage: getTipMessage({ t, api}),
    formatFileSize
  })
}

const mergeApi = ({ api, props, $service, state, emit, Modal, t, vm, Streamsaver }) => {
  Object.assign(api, {
    segmentUploadInit: segmentUploadInit({ api, props, service: $service, state}),
    segmentUpload: segmentUpload({ api, props, service: $service, state, emit}),
    addFileToList: addFileToList({ api, emit, props, state }),
    downloadFile: downloadFile({ api, state }),
    downloadFileSingleInner: downloadFileSingleInner({ props, state, api}),
    previewImage: previewImage({ api, props, service: $service }),
    previewFile: previewFile({ api, props }),
    getNewTabPreviewUrl: getNewTabPreviewUrl({ api }),
    submit: submit({ api, vm, props, state }),
    handleStart: handleStart({ api, props, state, vm }),
    batchSegmentUpload: batchSegmentUpload({ api, props, vm, state }),
    largeDocumentUpload: largeDocumentUpload({ api, Modal, state, emit, t }),
    handleProgress: handleProgress({ api, emit, state }),
    handleSuccess: handleSuccess({ api, emit, Modal, props, state, t }),
    handleError: handleError({ api, emit, state, props }),
    handleRemove: handleRemove({ api, emit, props, state}),
    handleReUpload: handleReUpload({ vm}),
    handleReUploadTotal: handleReUploadTotal(api),
    updateUrl: updateUrl({ api, props, state }),
    startUpload: startUpload({ api, state, vm, Modal, t }),
    beforeUpload: beforeUpload({ api, props, Modal, t, state }),
    getDownloadFileInfo: getDownloadFileInfo({ api, props, state, service: $service }),
    largeDocumentDownload: largeDocumentDownload({ api, state }),
    sliceDownloadChunk: sliceDownloadChunk({ state }),
    batchSegmentDownload: batchSegmentDownload({ state, api }),
    downloadFileInner: downloadFileInner({ api, props, state }),
    setWriterFile: setWriterFile({ state, emit, Streamsaver }),
    afterDownload: afterDownload({ api, state }),
    getFileHash: getFileHash({ emit, Modal, t, state }),
    modifyServiceUrlSingle: modifyServiceUrlSingle({ state, props}),
    getKiaScanTip: getKiaScanTip({ Modal, t }),
    downloadFileSingle: downloadFileSingle({ service: $service, props, state, api, emit }),
    downloadFileBatch: downloadFileBatch({ api, service: $service, props, state, emit }),
    downloadFileSingleHwh5: downloadFileSingleHwh5({ state, props, emit}),
    downloadAsyncPackage: downloadAsyncPackage({ state, props, api, service: $service }),
    validateDownloadStatus: validateDownloadStatus({ state, Modal }),
    handleChange: handleChange({ vm}),
    handleClickFileList: handleClickFileList({ state, emit }),
    handleTriggerClick: handleTriggerClick({ vm, state, props, emit }),
    closeRecordPanel: closeRecordPanel({ vm, state, props })
  })
}

const initWatch = ({ watch, state, api, props, $service }) => {
  watch(
    () => props.edm?.upload,
    (value) => value && api.getToken({ token: value.token, isinit: true }),
    { immediate: true, deep: true }
  )

  watch(() => props.listType, api.watchListType)

  watch(
    () => props.fileList,
    (value) => api.watchFileList(value),
    { immediate: true, deep: true }
  )

  watch(
    () => props.action,
    () => {
      if (!props.httpRequest && !state.isEdm) {
        api.updateUrl()
      }
    },
    { immediate: true }
  )

  watch(
    () => state.isSuccess,
    (value) => value && $service.getSingleUploadUrl().then((url) => (state.url = url)),
    { immediate: true }
  )

  watch(() => props.edm, api.computeDocChunkSize, { deep: true, immediate: true })
}

// eslint-disable-next-line import/no-mutable-exports
export let getApi = () => ({}) as { downloadFile: Function }

export const renderless = (
  props: IFileUploadProps,
  { computed, inject, onBeforeUnmount, provide, reactive, ref, watch, onMounted, markRaw }: ISharedRenderlessParamHooks,
  { t, vm, emit, service}: IFileUploadRenderlessParamUtils,
  { Modal, Streamsaver }: IFileUploadModalVm & { Streamsaver: IFileUploadStreamsaver }
): IFileUploadApi => {
  let api = {} as IFileUploadApi
  const $service: IFileUploadService = initService({ props, service })
  const httpRequest: Function = $service.httpRequest
  const state: IFileUploadState = initState({
    reactive,
    computed,
    api,
    inject,
    ref,
    vm,
    props,
    httpRequest,
    markRaw,
    service
  })

  initApi({ api, state, props, vm, $service, t, Modal, emit })
  mergeApi({ api, props, $service, state, emit, Modal, t, vm, Streamsaver })
  getApi = () => api

  provide('uploader', vm)

  onMounted(api.mounted)

  // 注册生命周期函数必须要在（watch）异步函数/组件之前，否则会 Vue3 警告
  onBeforeUnmount(() => {
    api.onBeforeDestroy()
    api = null as unknown as IFileUploadApi

    vm.$off('drag-over')
  })

  initWatch({ watch, state, api, props, $service })

  return api
}
