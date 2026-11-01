import { svg } from '@opentiny/vue-common'
import RichTextTaskList from '@opentiny/vue-theme/svgs/rich-text-task-list.svg?component'

export default () =>
  svg({ name: 'IconRichTextTaskList', component: RichTextTaskList, filledComponent: RichTextTaskList })()
