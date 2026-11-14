<template>
  <tiny-collapse class="demo-collapse-wrap" v-model="activeNames">
    <tiny-collapse-item title="多列表单" name="1">
      <tiny-layout>
        <tiny-form :responsive-layout="true">
          <tiny-row>
            <tiny-col :span="6">
              <tiny-form-item label="公司名称">
                <tiny-input v-model="formData.name" placeholder="请输入"></tiny-input>
              </tiny-form-item>
            </tiny-col>
            <tiny-col :span="6">
              <tiny-form-item label="员工数">
                <tiny-numeric v-model="formData.employees" :min="0"></tiny-numeric>
              </tiny-form-item>
            </tiny-col>
          </tiny-row>
          <tiny-row>
            <tiny-col :span="6">
              <tiny-form-item label="城市">
                <tiny-base-select v-model="formData.city" placeholder="请选择">
                  <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </tiny-option>
                </tiny-base-select>
              </tiny-form-item>
            </tiny-col>
          </tiny-row>
        </tiny-form>
      </tiny-layout>
    </tiny-collapse-item>
  </tiny-collapse>
</template>

<script setup>
import { ref } from 'vue'
import {
  TinyCollapse,
  TinyCollapseItem,
  TinyLayout,
  TinyForm,
  TinyFormItem,
  TinyRow,
  TinyCol,
  TinyInput,
  TinyNumeric,
  TinyBaseSelect,
  TinyOption
} from '@hybncloud/tinysmall'

const activeNames = ref(['1', '2'])
const formData = ref({
  name: '',
  employees: 1,
  city: ''
})
const options = ref([
  {
    value: 'shenzhen',
    label: '深圳'
  },
  {
    value: 'guangzhou',
    label: '广州'
  },
  {
    value: 'foshan',
    label: '佛山'
  },
  {
    value: 'shaoguan',
    label: '韶关'
  },
  {
    value: 'meizhou',
    label: '梅州'
  }
])
</script>

<style scoped lang="less">
.demo-collapse-wrap :deep(.tiny-collapse-item__content > *) {
  line-height: 1.6;
}
</style>
