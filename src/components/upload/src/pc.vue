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
import { setup, h, defineComponent } from '@tinysmall/common'
import { uploadAjax } from '@tinysmall/utils'

// 此处引入 h 是为了防止打包后 h 被重命名导致组件报错的问题
import { renderless } from '@tinysmall/renderless/upload/vue'
import UploadDragger from '@tinysmall/upload-dragger'
import Modal from '@tinysmall/modal'
import type { IUploadApi } from '@tinysmall/renderless/types/upload.type'

export const uploadProps = {
  accept: String,
  action: {
    type: String,
    default: ''
  },
  autoUpload: Boolean,
  beforeUpload: Function,
  pasteUpload: Boolean,
  data: Object,
  disabled: Boolean,
  drag: Boolean,
  edmToken: {
    type: Object,
    default: () => ({})
  },
  fileList: {
    type: Array,
    default: () => []
  },
  headers: Object,
  httpRequest: {
    type: Function,
    default: uploadAjax
  },
  isFolder: {
    type: Boolean,
    default: false
  },
  limit: Number,
  listType: String,
  multiple: Boolean,
  name: {
    type: String,
    default: 'file'
  },
  onError: Function,
  onExceed: Function,
  onPreview: {
    type: Function,
    default: () => {}
  },
  onProgress: Function,
  onRemove: {
    type: Function,
    default: () => {}
  },
  onStart: Function,
  onSuccess: Function,
  type: String,
  withCredentials: Boolean,
  isHidden: {
    type: Boolean,
    default: false
  },
  scale: {
    type: [Number, String],
    default: 1
  },
  sourceType: {
    type: String,
    default: 'picture',
    validator(val: string) {
      return val.split('/').every((type) => ['picture', 'video', 'audio'].includes(type))
    }
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  customClass: [String, Object, Array],
  handleTriggerClick: {
    type: Function,
    default: () => {}
  },
  mode: String,
  showTitle: Boolean,
  isHwh5: {
    type: Boolean,
    default: false
  },
  tipMessage: {
    type: String,
    default: ''
  },
  promptTip: {
    type: Boolean,
    default: false
  },
  showFileList: {
    type: Boolean,
    default: true
  }
}

export default defineComponent({
  inheritAttrs: false,
  name: 'TinyUpload',
  props: uploadProps,
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      h
    })
  },
  render() {
    let {
      accept,
      disabled,
      drag,
      handleChange,
      handleClick,
      handlePaste,
      handleKeydown,
      isFolder,
      listType,
      multiple,
      name,
      uploadFiles,
      fileList,
      limit,
      isHidden,
      type
    } = this

    const defaultSlot = (this.slots.default && this.slots.default()) || []
    const operateSlot = this.slots.operate && this.slots.operate()
    const tipSlot = this.slots.tip && this.slots.tip()

    const hidden = isHidden && fileList.length >= limit

    return (
      !hidden && (
        <div class={['tiny-upload', `tiny-upload--${listType}`, disabled ? 'is-disabled' : '']}>
          <div
            class="tiny-upload-btn"
            onClick={($event) => handleClick($event, type)}
            onPaste={handlePaste}
            onKeydown={handleKeydown}
            tabindex="0"
          >
            {drag ? (
              <UploadDragger disabled={disabled} onFile={uploadFiles}>
                {defaultSlot}
              </UploadDragger>
            ) : (
              defaultSlot
            )}
          </div>
          {operateSlot}
          {tipSlot}
          <input
            class="tiny-upload__input"
            type="file"
            webkitdirectory={isFolder}
            ref="input"
            name={name}
            onChange={handleChange}
            multiple={isFolder ? true : multiple}
            accept={accept}
          />
        </div>
      )
    )
  }
})
</script>
