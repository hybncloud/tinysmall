<script setup lang="ts" generic="T extends object">
import { computed, type VNode } from 'vue';

interface DataGridColumnDef {
    field?: string
    title?: string
    width?: string
}

const { columns, data } = defineProps<{
    rowId?: string
    columns?: DataGridColumnDef[]
    data?: T[]
}>()

const slots = defineSlots<{
    default?: () => VNode[]
}>()

const columnDefs = computed<DataGridColumnDef[]>(() => {
    if (columns) return columns
    if (slots.default) slots.default().map(vnode => ({
        field: vnode.props?.field,
        title: vnode.props?.title,
        width: vnode.props?.width
    }))
    return []
});
</script>

<template>
    <table>
        <thead>
            <tr>
                <td v-for="columnDef in columnDefs">
                    {{ columnDef.title }}
                </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in data">
                <td v-for="columnDef in columnDefs">
                    {{ columnDef.field ? row[columnDef.field] : '' }}
                </td>
            </tr>
        </tbody>
    </table>
</template>