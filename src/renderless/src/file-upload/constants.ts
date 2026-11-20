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
/** file-upload 静态常量：由组件层与 renderless 层直接共享导入，替代原 _constants prop 注入机制 */
export const $constants = {
  FILE_UPLOAD_INNER_TEMPLATE: 'file-upload-inner-template',
  UPLOAD_INNER: 'upload-inner',
  UPLOAD_INNER_TEMPLATE: 'upload-inner-template',
  UPLOAD_LIST_INNER: 'upload-list-inner',
  UPLOAD_LIST_INNER_TEMPLATE: 'upload-list-inner-template',
  ONLY_SUPPORT: 'ui.fileUpload.onlySupport',
  COMMA: 'ui.base.comma',
  FILE_NOT_LESS_THAN: 'ui.fileUpload.fileNotLessThan',
  FILE_NOT_MORE_THAN: 'ui.fileUpload.fileNotMoreThan',
  FILE_SIZE_RANGE: 'ui.fileUpload.fileSizeRange',
  NUMBER_LIMIT: 'ui.fileUpload.numberLimit',
  FILE_STATUS: {
    READY: 'ready',
    SUCESS: 'success',
    UPLOADING: 'uploading',
    FAIL: 'fail',
    DOWNLOADING: 'downloading'
  },
  LIST_TYPE: {
    TEXT: 'text',
    PICTURE_CARD: 'picture-card',
    PICTURE: 'picture',
    THUMB: 'thumb',
    PICTURE_SINGLE: 'picture-single',
    DRAG_SINGLE: 'drag-single',
    SAAS: 'saas'
  },
  EDM: {
    CHUNKINIT: 'chunkInit',
    FILESIZE: 'fileSize',
    CHUNKS: 'chunks',
    FILENAME: 'fileName',
    ISCHECKCODE: 'isCheckCode',
    CHECKCODE: 'checkCode',
    MULTIPART: 'multipartFile',
    DOCID: 'docId',
    CHUNK: 'chunk',
    SINGLEUPLOAD: 'uploadFile',
    LOWERNAME: 'filename',
    FOLDERKEY: 'ui.fileUpload.folder',
    FORMAT: 'docFormat=wm&',
    WATER: 'usageScenes=water&wmType=wm&',
    SOURCE: 'usageScenes=source&',
    URLCONTS: '&type=doc&pageNum=1&docVersion=',
    EDMTOKEN: 'EDM-Authorization',
    TRACEID: 'x-trace-id',
    TEXT: 'edm-text',
    JSLIB: './jslib/',
    I18NKEY: 'ui.fileUpload.token',
    LARGEFILEKEY: 'ui.fileUpload.largefile',
    EXCEED: 'ui.fileUpload.exceed',
    SIZE: 'ui.fileUpload.fileSize',
    SIZE_17G: 17 * 1024 * 1024,
    SIZE_2G: 2 * 1024 * 1024, // 单位（KB）
    SIZE_64M: 64 * 1024,
    SIZE_32M: 32 * 1024,
    SIZE_20M: 20 * 1024,
    SIZE_16M: 16 * 1024,
    SIZE_8M: 8 * 1024,
    SIZE_4M: 4 * 1024,
    SIZE_2M: 2 * 1024,
    SIZE_0M: 0 * 1024,
    FILEEMPTY: 'ui.fileUpload.empty',
    KIASCANTIP: 'ui.fileUpload.kiaScanTip',
    FILENAMEEXCEEDS: 'ui.fileUpload.fileNameExceeds',
    THEFILENAME: 'ui.fileUpload.fileName',
    CALCHASH: 'ui.fileUpload.calcHash',
    KIASTATUS: 12079,
    NumberExceed: 'ui.fileUpload.numberExceed',
    notSupport: 'ui.fileUpload.notSupport',
    NOT_SUPPORT_NO_SUFFIX: 'ui.fileUpload.notSupportNoSuffix',
    STATUS_SPECIAL_CHARACTERS: 11005,
    NOT_SUPPORT_SPECIAL_CHARACTERS: 'ui.fileUpload.notSupportSpecialCharacters',
    DOC_PREVIEW: 'ui.fileUpload.docPreview'
  },
  IMAGE_TYPE: 'image/*',
  FILE_TYPE: {
    EXCEL: 'xls/xlsx',
    FILE: 'file',
    PDF: 'pdf',
    PICTURE: 'png/jpg/jpeg/gif/svg/webp/bmp/tif/pjp/apng/xbm/jxl/svgz/ico/tiff/jfif/pjpeg/avif',
    PPT: 'ppt/pptx',
    TEXT: 'txt',
    WORD: 'doc/docx',
    ZIP: 'zip/rar/arj/z/jar/lzh',
    VIDEO: 'mp4/m4v/3gp/mpg/flv/f4v/swf/avi/wmv/rmvb/mov/mts/m2t/ogg/webm/mkv',
    AUDIO: 'mp3/aac/ape/flac/wav/wma/amr/mid/pcm'
  },
  SOURCE_TYPE: {
    SOURCE_VIDEO: 'video',
    SOURCE_AUDIO: 'audio',
    SOURCE_PICTURE: 'picture'
  },
  MODE: {
    BUBBLE: 'bubble'
  }
}
