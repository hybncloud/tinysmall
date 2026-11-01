import { svg } from '@opentiny/vue-common'
import WaitingForSubmission from '@opentiny/vue-theme/svgs/waiting-for-submission.svg?component'

export default () =>
  svg({ name: 'IconWaitingForSubmission', component: WaitingForSubmission, filledComponent: WaitingForSubmission })()
