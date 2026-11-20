<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<script lang="tsx">
import { $constants } from '@tinysmall/renderless/file-upload/constants'
import { renderless, api } from '@tinysmall/renderless/file-upload/vue'
import { $prefix, $props, props, setup, h, defineComponent } from '@tinysmall/common'
import UploadList from '@tinysmall/upload-list'
import Upload from '@tinysmall/upload'
import Progress from '@tinysmall/progress'
import '@tinysmall/theme/file-upload/index.less'
import '@tinysmall/theme/upload-list/index.less'
import '@tinysmall/theme/upload-dragger/index.less'
import '@tinysmall/theme/upload/index.less'
import Modal from '@tinysmall/modal'
import DialogBox from '@tinysmall/dialog-box'
import Popover from '@tinysmall/popover'
import Button from '@tinysmall/button'
import Input from '@tinysmall/input'
import Switch from '@tinysmall/switch'
import Tooltip from '@tinysmall/tooltip'
import {
  iconAttachment,
  iconDownload,
  iconSuccessful,
  iconClose,
  iconFileCloudupload,
  iconPlus,
  iconHelpCircle
} from '@tinysmall/icon'
import Streamsaver from 'streamsaver'
import type { IFileUploadApi } from '@tinysmall/renderless/types/file-upload.type'

const TinyIconAttachment = iconAttachment()
const TinyIconSuccessful = iconSuccessful()
const TinyIconClose = iconClose()
const TinyIconDownload = iconDownload()
const TinyIconFileCloudupload = iconFileCloudupload()
const TinyIconPlus = iconPlus()
const TinyIconHelpCircle = iconHelpCircle()


export const fileUploadProps = {
  ...$props,
  accept: String,
  action: String,
  autoUpload: {
    type: Boolean,
    default: () => true
  },
  beforeRemove: Function,
  beforeUpload: Function,
  data: Object,
  disabled: Boolean,
  drag: Boolean,
  dragger: Boolean,
  edm: {
    type: Object,
    default: () => ({})
  },
  fileList: {
    type: Array,
    default: () => []
  },
  fileSize: {
    type: [Number, Array],
    validator(value) {
      return Array.isArray(value) ? value[0] < value[1] : typeof value === 'number'
    }
  },
  headers: {
    type: Object,
    default: () => ({})
  },
  httpRequest: Function,
  limit: Number,
  listType: {
    type: String,
    default: () => 'text',
    validator: (value: string) => !!$constants.LIST_TYPE[value.toUpperCase().replace('-', '_')]
  },
  mergeService: {
    type: Boolean,
    default: () => false
  },
  multiple: Boolean,
  name: {
    type: String,
    default: () => 'file'
  },
  openDownloadFile: {
    type: Boolean,
    default: () => false
  },
  showFileList: {
    type: Boolean,
    default: () => true
  },
  size: String,
  thumbOption: {
    type: Object,
    default: () => ({
      popperClass: '',
      width: 270,
      showDownload: false,
      downloadFile: Function,
      showDel: false,
      icon: 'icon-attachment',
      showTooltip: false
    })
  },
  type: {
    type: String,
    default: () => 'select'
  },
  withCredentials: {
    type: Boolean,
    default: () => true
  },
  isFolderTitle: {
    type: Boolean,
    default: false
  },
  listOption: {
    type: Object,
    default: () => ({
      showUpdate: true,
      showDel: true
    })
  },
  maxNameLength: {
    type: Number,
    default: 0
  },
  sourceType: {
    type: String,
    default: 'picture',
    validator(val) {
      return val.split('/').every((type) => ['picture', 'video', 'audio'].includes(type))
    }
  },
  showTitle: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ''
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  customClass: [String, Object, Array],
  hwh5: Object,
  cacheToken: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  compact: {
    type: Boolean,
    default: false
  },
  beforeAddFile: Function,
  encryptConfig: {
    type: Object,
    default: () => ({
      enabled: false,
      encrypt: false,
      watermark: ''
    })
  },
  promptTip: {
    type: Boolean,
    default: false
  },
  isHidden: {
    type: Boolean,
    default: false
  },
  pasteUpload: {
    type: Boolean,
    default: false
  },
  reUploadable: Boolean,
  reUploadTip: Function,
  imageBgColor: String // mobile-first新增
}

export default defineComponent({
  name: $prefix + 'FileUpload',
  props: fileUploadProps,
  emits: ['change', 'hash-progress', 'progress', 'success', 'error', 'remove', 'download'],
  setup(props, context): any {
    return setup({
      props,
      context,
      renderless,
      api,

      extendOptions: { Modal, Streamsaver }
    }) as unknown as IFileUploadApi
  },
  components: {
    TinyProgress: Progress,
    UploadList,
    Upload,
    TinyDialogBox: DialogBox,
    Popover,
    TinyButton: Button,
    TinyInput: Input,
    TinySwitch: Switch,
    TinyTooltip: Tooltip
  },
  render() {
    let uploadList
    const {
      exceed = () => {},
      preview = undefined,
      onDownloadAll: downloadAll,
      onDownloadFile: handleDownloadFile,
      onReUpload: reUpload
    } = this.$attrs
    const {
      uploadFiles,
      isEdm,
      dialogConfigObj,
      isSuccess,
      uploadDisabled,
      url,
      accept,
      httpRequest,
      edmToken,
      iframeUrl
    } = this.state
    const {
      downloadFile,
      handleRemove,
      handleReUpload,
      handleReUploadTotal,
      updateFile,
      slots,
      edm = {},
      t,
      encryptConfig,
      encryptDialogConfirm,
      handleTriggerClick,
      handleClickFileList,
      handleFileClick,
      displayOnly,
      listType,
      compact,
      promptTip
    } = this
    const isPictureCard = listType === 'picture-card'
    const { showDel, showDownload, showTooltip, showUpdate, icon } = this.thumbOption
    const execDownload = this.thumbOption.downloadFile || downloadFile
    const isFolder = edm.upload ? edm.upload.isFolder : false
    const notice = this.slots.notice && this.slots.notice()
    const title = this.title || t('ui.fileUpload.attachment')

    const getDefaultTitle = (title: string, showTitle: boolean) => {
      return (
        <div class="tiny-upload-title">
          <span class={[showTitle ? 'title-show' : 'title-hide', displayOnly ? 'display-only' : '']}>{title}</span>
        </div>
      )
    }
    const popperConfig = { bubbling: true }

    const getTriggerContent = (t: any, disabled: boolean) => {
      return (
        <div class="trigger-btn">
          <tiny-button disabled={disabled} aria-label={t('ui.fileUpload.uploadFile')} onClick={handleTriggerClick}>
            <TinyIconPlus />
            <span>{t('ui.fileUpload.uploadFile')}</span>
          </tiny-button>
        </div>
      )
    }

    // 操作区域插槽
    const getOperateContent = (downloadAll: any, uploadFiles: Array<any>, t: any) => {
      return null
    }

    // 提示信息插槽
    const getDefaultTip = (tipMsg) => {
      if (promptTip) {
        return (
          (slots.tip && slots.tip()) ||
          (tipMsg && promptTip && (
            <tiny-tooltip
              effect="light"
              content={(slots.tip && slots.tip()) || tipMsg}
              placement="right"
              popper-options={popperConfig}
            >
              <div class="prompt-tip">
                <TinyIconHelpCircle />
              </div>
            </tiny-tooltip>
          ))
        )
      } else {
        return (
          <div class="tip-wrap">
            <div title={tipMsg} class="tip-content">
              {(slots.tip && slots.tip()) || tipMsg}
            </div>
          </div>
        )
      }
    }

    const getThumIcon = (file) => [
      showDownload && (
        <span
          class="thumb-icon"
          role="button"
          tabindex="0"
          aria-label={t('ui.fileUpload.downloadFile')}
          title={t('ui.fileUpload.downloadFile')}
          onClick={() => execDownload(file)}
        >
          <TinyIconDownload class="download-icon" />
        </span>
      ),
      isEdm && !isFolder && showUpdate && (
        <span
          class="thumb-icon"
          role="button"
          tabindex="0"
          aria-label={t('ui.fileUpload.updateFile')}
          title={t('ui.fileUpload.updateFile')}
          onClick={() => updateFile(file)}
        >
          <TinyIconFileCloudupload class="refres-icon" />
        </span>
      ),
      showDel && (
        <span
          class="thumb-icon"
          role="button"
          tabindex="0"
          aria-label={t('ui.fileUpload.deleteFile')}
          title={t('ui.fileUpload.deleteFile')}
          onClick={() => handleRemove(file)}
          onKeydown={(event) => handleEnter(event, () => handleRemove(file))}
        >
          <TinyIconClose class="close-icon" />
        </span>
      )
    ]

    const getThumbList = (file) => {
      const result = slots.file && slots.file({ file })

      if (result) {
        return result
      } else {
        return [
          <TinyIconSuccessful class="thumb-success-icon" />,
          <span
            class={['thumb-item-name', !showDel ? 'hide-close-icon' : '', !showDownload ? 'hide-download-icon' : '']}
            onClick={() => {
              handleFileClick(file)
            }}
          >
            {file.name}
          </span>,
          getThumIcon(file)
        ]
      }
    }

    const getFileSize = () => <span>{uploadFiles.length}</span>

    if (this.showFileList) {
      if (listType === 'thumb') {
        uploadList =
          uploadFiles.length === 0
            ? ''
            : h('div', { class: 'tiny-upload--thumb__wrap' }, [
                h(
                  Popover,
                  {
                    trigger: 'hover',
                    popperClass: this.thumbOption.popperClass,
                    width: this.thumbOption.width
                  },
                  {
                    reference: () =>
                      h('div', { class: 'tiny-upload--thumb__head' }, [
                        h(icon || TinyIconAttachment, {
                          class: 'thumb-icon'
                        }),
                        getFileSize()
                      ]),
                    default: () =>
                      h('div', { class: 'tiny-upload--thumb__body' }, [
                        h('div', { class: 'tiny-upload--thumb__list' }, [
                          uploadFiles.map((item) =>
                            h(
                              Popover,
                              {
                                content: item.name,
                                trigger: showTooltip ? 'hover' : 'manual',
                                placement: 'top'
                              },
                              {
                                reference: () =>
                                  h(
                                    'div',
                                    {
                                      class: 'thumb-item'
                                    },
                                    [getThumbList(item)]
                                  )
                              }
                            )
                          )
                        ])
                      ])
                  }
                )
              ])
      } else {
        const uploadListDate = {
          disabled: uploadDisabled,
          reUploadable: this.reUploadable,
          reUploadTip: this.reUploadTip,
          isFolder,
          isEdm,
          edm,
          displayOnly,
          listType,
          files: uploadFiles,
          isFolderTitle: this.isFolderTitle,
          listOption: this.listOption,
          maxNameLength: this.maxNameLength,
          handlePreview: preview,
          handleDownloadFile,
          handleReUpload: reUpload,
          openDownloadFile: this.openDownloadFile,
          compact,
          ref: 'upload-list-inner',
          onRemove: handleRemove,
          onReUpload: handleReUpload,
          onReUploadTotal: handleReUploadTotal,
          onUpdate: updateFile,
          onStart: this.handleStart,
          onClickFileList: handleClickFileList,
          'onUpdate:visible': (visible: Boolean) => (this.state.visible = visible)
        }
        const uploadListSlots = {
          default: (props: any) => {
            if (slots.file) {
              return slots.file({
                file: props.file
              })
            }
          },
          tip: () => tip,
          'assist-content': (props: any) => {
            if (slots['assist-content']) {
              return slots['assist-content']({ file: props.file })
            }
          },
          operate: (props: any) => {
            if (slots.operate) {
              return slots.operate({ file: props.file })
            }
          }
        }
        uploadList = h(UploadList, uploadListDate, uploadListSlots)
      }
    }

    const uploadData = {
      type: this.type,
      drag: this.drag,
      action: url,
      multiple: this.multiple,
      withCredentials: this.withCredentials,
      headers: this.headers,
      name: this.name,
      data: this.data,
      edm: this.edm,
      accept: isEdm ? accept : this.accept,
      fileList: uploadFiles,
      autoUpload: this.autoUpload,
      listType,
      disabled: uploadDisabled,
      displayOnly,
      limit: this.limit,
      onExceed: exceed,
      onStart: this.handleStart,
      onProgress: this.handleProgress,
      onSuccess: this.handleSuccess,
      onError: this.handleError,
      onPreview: preview,
      httpRequest,
      isFolder,
      edmToken,
      pasteUpload: this.pasteUpload,
      isHidden: this.isHidden,
      ref: 'upload-inner'
    }

    const tipMsg = this.getTipMessage({
      accept: isEdm ? accept : this.accept,
      fileSize: this.fileSize,
      limit: this.limit
    })

    const tip = null

    tip && tip.data && (tip.data.slot = 'tip')

    const operate = !displayOnly ? getOperateContent(downloadAll, uploadFiles, t) : null

    operate && operate.data && (operate.data.slot = 'operate')

    const defaultSlot = slots.default && slots.default()
    const trigger = slots.trigger ? slots.trigger() : defaultSlot

    // 获取children
    const getChildren = () => {
      const triggerDom = trigger
      const childNodes = { default: () => triggerDom, tip: () => tip, operate: () => operate }

      return childNodes
    }

    const uploadComponent = h(Upload, uploadData, getChildren())
    let previewComponent = null
    let encryptDialogComponent = null

    if (isEdm && isSuccess) {
      uploadData.accept = accept
      uploadData.edmToken = edmToken
    }

    if (this.edm.preview) {
      previewComponent = h(
        DialogBox,
        {
          minHeight: '600px',
          width: '60%',
          ...dialogConfigObj
        },
        {
          default: () => (
            <iframe
              id="_iframe"
              style="display: block;width: 100%;height: 500px;display: inline-block;"
              allowfullscreen
              allowtransparency="true"
              frameborder="0"
              border="0"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              src={iframeUrl}
            ></iframe>
          )
        }
      )
    }

    if (encryptConfig.enabled) {
      encryptDialogComponent = h(
        DialogBox,
        {
          class: 'encrypt-config-dialog',
          style: '',
          lockScroll: true,
          visible: this.state.encryptDialogConfig.show,
          dragable: true,
          title: this.t('ui.fileUpload.encryptDialogTitle'),
          width: '380px',
          height: 'auto',
          'onUpdate:visible': (value) => (this.state.encryptDialogConfig.show = value)
        },
        {
          default: () => {
            return (
              <div class="encrypt-config-dialog-body">
                <div class="encrypt-item">{this.t('ui.fileUpload.addWatermark')}</div>
                <div>
                  <tiny-input v-model={this.encryptConfig.watermark}></tiny-input>
                </div>
                <p>&nbsp;</p>
                <div class="encrypt-item">{this.t('ui.fileUpload.encrypted')}</div>
                <div>
                  <tiny-switch v-model={this.encryptConfig.encrypt}></tiny-switch>
                </div>
              </div>
            )
          },
          footer: () => {
            return [
              <Button onClick={() => (this.state.encryptDialogConfig.show = false)}>{this.t('ui.base.cancel')}</Button>,
              [
                <Button type="primary" onClick={() => encryptDialogConfirm()}>
                  {this.t('ui.popupload.uploadButtonText')}
                </Button>
              ]
            ]
          }
        }
      )
    }

    return (
      <div class="tiny-file-upload" role="group" aria-label={title}>
        {notice}
        {isPictureCard ? uploadList : ''}
        {slots.trigger ? [uploadComponent, defaultSlot] : uploadComponent}
        {slots.tip && slots.tip()}
        {isPictureCard ? '' : uploadList}
        {previewComponent}
        {encryptDialogComponent}
      </div>
    )
  }
})
</script>
