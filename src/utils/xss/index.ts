let xssOptions: any = {
  enableUrl: true
}

let filterUrl = (content: string) => {
  if (!xssOptions.enableUrl || typeof content !== 'string') {
    return content
  }

  const filteredUrl = content
    .replace(/&#(\w+)(^\w|;)?/g, (match, dec) => String.fromCharCode(dec))
    .replace(/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, '')
    .trim()

  if (!filteredUrl) {
    return ''
  }

  if (['.', '/'].includes(filteredUrl[0])) {
    return filteredUrl
  }

  const urlParse = filteredUrl.match(/^([^:]+):/gm)

  if (!urlParse) {
    return filteredUrl
  }

  if (/^([^\w]*)(javascript|data|vbscript)/im.test(urlParse[0])) {
    return ''
  }

  return filteredUrl
}

export const setFilterUrl = (filter: (content: string) => string) => {
  filterUrl = filter
}

export default {
  filterUrl,
  setFilterUrl
}
