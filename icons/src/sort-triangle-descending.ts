import { svg } from '@opentiny/vue-common'
import SortTriangleDescending from '@opentiny/vue-theme/svgs/sort-triangle-descending.svg?component'

export default () =>
  svg({
    name: 'IconSortTriangleDescending',
    component: SortTriangleDescending,
    filledComponent: SortTriangleDescending
  })()
