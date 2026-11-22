const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g

export default function (string: string, ...args: any[]) {
  let params: any = args

  if (args.length === 1 && typeof args[0] === 'object') {
    params = args[0]
  }

  if (!params || !params.hasOwnProperty) {
    params = {}
  }

  return string.replace(RE_NARGS, (match, prefix, i, index) => {
    let result

    if (string[index - 1] === '{' && string[index + match.length] === '}') {
      return i
    } else {
      result = Object.prototype.hasOwnProperty.call(params, i) ? params[i] : null

      if (result === null || result === undefined) {
        return ''
      }

      return result
    }
  })
}
