import { svg } from '@opentiny/vue-common'
import EditorBackground from '@opentiny/vue-theme/svgs/editor-background.svg?component'

export default () =>
  svg({ name: 'IconEditorBackground', component: EditorBackground, filledComponent: EditorBackground })()
