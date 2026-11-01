import { svg } from '@opentiny/vue-common'
import WarningTriangle from '@opentiny/vue-theme/svgs/warning-triangle.svg?component'

export default () =>
  svg({ name: 'IconWarningTriangle', component: WarningTriangle, filledComponent: WarningTriangle })()
