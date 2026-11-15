import { svg } from '@tinysmall/common'
import WarningTriangle from '../svgs/warning-triangle.svg?component'

export default () =>
  svg({ name: 'IconWarningTriangle', component: WarningTriangle, filledComponent: WarningTriangle })()
