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

<template>
  <div class="tiny-upload-list__wrapper">
    <transition-group
      tag="ul"
      :class="['tiny-upload-list', 'tiny-upload-list--' + listType, { 'is-disabled': disabled }]"
      name="tiny-list"
    >
      <li v-for="file in files" :key="file.uid" tabindex="0" class="tiny-upload-list__li">
        <div
          :class="[
            'tiny-upload-list__item',
            'is-' + file.status,
            state.focusing ? 'focusing' : '',
            { isEdm },
            { showUpdate: listOption.showUpdate },
            { showDel: listOption.showDel }
          ]"
          @keydown.delete="!disabled && $emit('remove', file)"
          @focus="state.focusing = true"
          @blur="state.focusing = false"
          @click="state.focusing = false"
        >
          <slot :file="file">
            <img
              class="tiny-upload-list__item-thumbnail"
              v-if="
                file.status !== 'uploading' &&
                file.status !== 'fail' &&
                ['picture-card', 'picture'].indexOf(listType) > -1
              "
              :src="file.url"
              alt=""
            />
            <tiny-tooltip placement="top" effect="light" :disabled="state.tooltipDisabled">
              <template #content>
                <span v-if="file.status === 'fail'" class="tiny-upload-list__item-tooltip"
                  ><icon-operationfaild class="tiny-upload-list__icon-operationfaild" />{{
                    t('ui.fileUpload.networkError')
                  }}</span
                >
                <span v-else class="tiny-upload-list__item-tooltip">{{
                  isFolderTitle ? (file.path || '') + file.name : file.name
                }}</span>
              </template>
              <a
                :class="['tiny-upload-list__item-name', { isFail: isEdm && file.status === 'fail' }]"
                @click="handleClick($event, file)"
                :title="state.tooltipDisabled ? (isFolderTitle ? (file.path || '') + file.name : file.name) : ''"
              >
                <tiny-icon-document
                  v-if="!isFolder"
                  :fill="isEdm && file.status === 'fail' ? '#f5222d' : ''"
                  class="tiny-svg-size"
                />{{
                  file.name.length > maxNameLength && maxNameLength
                    ? file.name.substring(0, maxNameLength) + '...'
                    : file.name
                }}
              </a>
            </tiny-tooltip>
            <div :class="['tiny-upload-list__item-edminfo', { isFail: isEdm && file.status === 'fail' }]" v-if="isEdm">
              <span>{{ file.docId }}</span>
              <span>{{ file.version }}</span>
              <span>{{ file.size }}</span>
              <span>{{ file.serverName }}</span>
            </div>
            <label class="tiny-upload-list__item-status-label" v-if="!state.preViewComponent">
              <icon-successful class="tiny-svg-size icon-successful" v-if="listType === 'text'" />
              <icon-yes
                class="tiny-svg-size tiny-icon-check"
                v-if="['picture-card', 'picture'].indexOf(listType) > -1"
              />
            </label>
            <span
              v-if="isEdm && !isFolder && !disabled && file.status !== 'fail' && listOption.showUpdate"
              :title="t('ui.fileUpload.updateFile')"
              @click="$emit('update', file)"
            >
              <icon-file-cloudupload
                class="tiny-svg-size icon-refres"
                :fill="isEdm && file.status === 'fail' ? '#f5222d' : ''"
              ></icon-file-cloudupload>
            </span>
            <span
              v-if="!disabled && reUploadable && file.status === 'fail'"
              :title="t('ui.fileUpload.reUploadFile')"
              @click="$emit('reUpload', file)"
            >
              <icon-refresh class="tiny-svg-size icon-refres" :fill="isEdm ? '#f5222d' : ''"></icon-refresh>
            </span>
            <span
              v-if="!disabled && listOption.showDel"
              role="button"
              tabindex="0"
              :title="t('ui.fileUpload.deleteFile')"
              :aria-label="t('ui.fileUpload.deleteFile') + ' ' + file.name"
              @click="$emit('remove', file)"
            >
              <component
                :is="state.closeComponent"
                class="tiny-svg-size icon-close"
                :fill="isEdm && file.status === 'fail' ? '#f5222d' : ''"
              ></component>
            </span>
            <i class="tiny-icon-close-tip" v-if="!disabled && listOption.showDel">
              {{ t('ui.fileUpload.deleteTip') }}</i
            >
            <tiny-progress
              v-if="file.status === 'uploading' || file.status === 'downloading'"
              status="success"
              :type="listType === 'picture-card' ? state.progressType : 'line'"
              :stroke-width="listType === 'picture-card' ? state.progressStrokeWidth : 2"
              :width="state.progressWidth"
              :percentage="parsePercentage(file.percentage)"
              :show-text="!state.progressWidth"
            >
            </tiny-progress>
            <div
              v-if="file.status === 'uploading' && listType === 'picture-card' && state.progressWidth"
              class="tiny-upload-list__item-cancel"
              role="button"
              tabindex="0"
              :aria-label="t('ui.fileUpload.cancelFile') + ' ' + file.name"
              @click="$emit('remove', file)"
            >
              {{ t('ui.fileUpload.cancelFile') }}
            </div>
            <tiny-tooltip placement="top" effect="light" :disabled="state.tooltipDisabled || file.status !== 'fail'">
              <template #content>
                <span class="tiny-upload-list__item-tooltip"
                  ><icon-operationfaild class="tiny-upload-list__icon-operationfaild" />{{
                    t('ui.fileUpload.pictureNetworkError')
                  }}</span
                >
              </template>
              <span
                class="tiny-upload-list__item-actions"
                v-if="listType === 'picture-card' && (state.progressWidth ? file.status !== 'uploading' : true)"
              >
                <span
                  v-if="openDownloadFile"
                  class="tiny-upload-list__item-download"
                  :title="t('ui.fileUpload.downloadFile')"
                  @click="handleClick(file)"
                >
                  <icon-download class="tiny-svg-size" />
                </span>
                <span
                  class="tiny-upload-list__item-preview"
                  v-if="handlePreview && file.status !== 'fail'"
                  :title="t('ui.fileUpload.previewFile')"
                  @click="handlePreview(file)"
                >
                  <icon-fullscreen-left v-if="state.preViewComponent" class="tiny-svg-size tiny-svg-fullscreen" />
                  <icon-view v-else class="tiny-svg-size" />
                </span>
                <span
                  v-if="isEdm && !isFolder && !disabled"
                  :title="t('ui.fileUpload.updateFile')"
                  class="tiny-upload-list__item-refres"
                  @click="$emit('update', file)"
                >
                  <icon-file-cloudupload class="tiny-svg-size" />
                </span>
                <span
                  v-if="!disabled"
                  class="tiny-upload-list__item-delete"
                  role="button"
                  tabindex="0"
                  :title="t('ui.fileUpload.deleteFile')"
                  :aria-label="t('ui.fileUpload.deleteFile') + ' ' + file.name"
                  @click="$emit('remove', file)"
                >
                  <icon-del class="tiny-svg-size icon-delete" />
                </span>
              </span>
            </tiny-tooltip>
          </slot>
        </div>
        <div
          v-if="state.preViewComponent && listType === 'picture-card'"
          :class="['tiny-upload-list__li-title', file.status === 'fail' && 'is-fail']"
          :title="isFolderTitle ? (file.path || '') + file.name : file.name"
        >
          {{
            file.name.length > maxNameLength && maxNameLength
              ? file.name.substring(0, maxNameLength) + '...'
              : file.name
          }}
        </div>
      </li>
    </transition-group>
    <div v-if="reUploadable && state.failUploadFileCount && listType === 'text'" class="tiny-upload-list__text-title">
      <icon-operationfaild class="tiny-upload-list__icon-operationfaild" />
      <span class="tiny-upload-list__text-desc">
        {{
          typeof reUploadTip === 'function'
            ? reUploadTip(state.failUploadFileCount)
            : t('ui.fileUpload.reUploadTip', { number: state.failUploadFileCount })
        }}
      </span>
      <tiny-button type="text" @click="$emit('ReUploadTotal', files)">{{
        t('ui.fileUpload.reUploadFile')
      }}</tiny-button>
    </div>
  </div>
</template>

<script lang="tsx">
import { setup, defineComponent } from '@tinysmall/common'
import { renderless, api } from '@tinysmall/renderless/upload-list/vue'
import Progress from '@tinysmall/progress'
import Tooltip from '@tinysmall/tooltip'
import Button from '@tinysmall/button'
import {
  iconDocument,
  iconSuccessful,
  iconClose,
  iconView,
  iconDel,
  iconYes,
  iconCloseCircle,
  iconError,
  iconFileCloudupload,
  iconDownload,
  iconCueL,
  iconRefresh,
  IconError,
  iconFullscreenLeft,
  iconRight,
  iconPause,
  iconAudio,
  iconEllipsis,
  iconExcelType,
  iconFileType,
  iconOtherType,
  iconPdfType,
  iconPictureType,
  iconPptType,
  iconTextType,
  iconVideoType,
  iconWordType,
  iconZipType,
  iconFileuploadPro
} from '@tinysmall/icon'
import Modal from '@tinysmall/modal'
import type { IUploadListApi } from '@tinysmall/renderless/types/upload-list.type'

export const uploadListProps = {
  disabled: {
    type: Boolean,
    default: () => false
  },
  display: {
    type: Boolean,
    default: () => true
  },
  files: {
    type: Array,
    default: () => []
  },
  filesIcon: {
    type: Array,
    default: () => []
  },
  handlePreview: Function,
  isEdm: {
    type: Boolean,
    default: () => false
  },
  isFolder: {
    type: Boolean,
    default: () => false
  },
  listType: String,
  openDownloadFile: {
    type: Boolean,
    default: () => false
  },
  srcList: {
    type: Array,
    default: () => []
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
  scale: {
    type: [Number, String],
    default: 1
  },
  showName: {
    type: Boolean,
    default: false
  },
  types: Array,
  displayOnly: {
    type: Boolean,
    default: false
  },
  handleDownloadFile: Function,
  handleReUpload: Function,
  isDragover: Boolean,
  selected: Object,
  triggerClick: {
    type: Function,
    default: () => {}
  },
  isHwh5: {
    type: Boolean,
    default: false
  },
  triggerPlay: {
    type: Function,
    default: () => {}
  },
  mode: String,
  /** 是否展示失败重传入口，取自原 pc.vue props 数组 */
  reUploadable: {
    type: Boolean,
    default: false
  },
  /** 重传提示文案函数，取自原 pc.vue props 数组 */
  reUploadTip: Function,
  lockScroll: {
    type: Boolean,
    default: true
  },
  compact: {
    type: Boolean,
    default: false
  },
  imageBgColor: String
}

export default defineComponent({
  name: 'TinyUploadList',
  components: {
    TinyProgress: Progress,
    TinyTooltip: Tooltip,
    TinyButton: Button,
    TinyIconDocument: iconDocument(),
    IconSuccessful: iconSuccessful(),
    IconClose: iconClose(),
    IconView: iconView(),
    IconDel: iconDel(),
    IconYes: iconYes(),
    IconCloseCircle: iconCloseCircle(),
    IconError: iconError(),
    IconFileCloudupload: iconFileCloudupload(),
    IconDownload: iconDownload(),
    IconCueL: iconCueL(),
    IconRefresh: iconRefresh(),
    IconOperationfaild: IconError(),
    IconFullscreenLeft: iconFullscreenLeft(),
    IconRight: iconRight(),
    IconPause: iconPause(),
    IconAudio: iconAudio(),
    IconEllipsis: iconEllipsis(),
    IconExcelType: iconExcelType(),
    IconFileType: iconFileType(),
    IconOtherType: iconOtherType(),
    IconPdfType: iconPdfType(),
    IconPictureType: iconPictureType(),
    IconPptType: iconPptType(),
    IconTextType: iconTextType(),
    IconVideoType: iconVideoType(),
    IconWordType: iconWordType(),
    IconZipType: iconZipType(),
    IconFileuploadPro: iconFileuploadPro()
  },
  emits: ['click-file-list', 'remove', 'start', 'update:visible', 'update', 'reUpload', 'ReUploadTotal'],
  props: uploadListProps,
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
