<template>
  <div>
    <tiny-transfer
      v-model="listValue"
      :data="listData"
      filterable
      :panelStyle="panelStyle"
      :panelBodyStyle="panelBodyStyle"
    ></tiny-transfer>
    <br />
    <br />
    <tiny-transfer
      v-model="treeValue"
      :props="{ key: 'id', disabled: 'disabled' }"
      :tree-op="treeConfig"
      filterable
      :data="treeData"
      :render="renderTree"
      :panelStyle="panelStyle"
      :panelBodyStyle="panelBodyStyle"
    ></tiny-transfer>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyTransfer, TinyTree } from '@hybncloud/tinysmall'

const generateData = () => {
  const data = []

  for (let i = 0; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${i}`
    })
  }

  return data
}
// 自定义面板样式
const panelStyle = ref({ width: '650px' })
const panelBodyStyle = ref({ height: '200px' })

// 列表示例
const listData = ref(generateData())
const listValue = ref([1, 4])

// tree 示例
const treeValue = ref([3, 4, 5])
const renderTree = ref({
  plugin: TinyTree
})
const treeData = ref([
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 4,
        label: '二级 1-1',
        children: [
          {
            id: 9,
            label: '三级 1-1-1'
          },
          {
            id: 10,
            label: '三级 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: '一级 2',
    children: [
      {
        id: 5,
        label: '二级 2-1'
      },
      {
        id: 6,
        label: '二级 2-2',
        disabled: true
      }
    ]
  },
  {
    id: 3,
    label: '一级 3',
    children: [
      {
        id: 7,
        label: '二级 3-1',
        disabled: true
      },
      {
        id: 8,
        label: '二级 3-2'
      }
    ]
  }
])
const treeConfig = ref({
  showLine: true,
  showCheckbox: true,
  nodeKey: 'id',
  checkStrictly: true,
  filterNodeMethod(query, data) {
    return data.label.includes(query)
  }
})

</script>
