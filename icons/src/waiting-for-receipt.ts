import { svg } from '@opentiny/vue-common'
import WaitingForReceipt from '@opentiny/vue-theme/svgs/waiting-for-receipt.svg?component'

export default () =>
  svg({ name: 'IconWaitingForReceipt', component: WaitingForReceipt, filledComponent: WaitingForReceipt })()
