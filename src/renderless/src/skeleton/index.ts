import { isNumber, isNull } from '@tinysmall/utils'

export const toPxStyle = (value: string | number): undefined | string => {
  if (isNull(value)) {
    return undefined
  }

  if (isNumber(value)) {
    return `${value}px`
  }

  return String(value)
}
