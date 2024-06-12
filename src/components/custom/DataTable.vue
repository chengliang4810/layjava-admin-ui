<!-- 数据表格与分页简单的封装、适配后端分页参数、请求后端统一规范的数据 -->
<script setup lang="ts" name="DataTable">
import type { DataTableColumns } from 'naive-ui'
import { useBoolean } from '@/hooks'
import { request } from '@/service/http'

// 组件参数声明
export interface DataTableProps {
  pageSize?: number
  rowKey?: string
  columns: DataTableColumns
  url: string
  params?: Record<string, any>
  modelValue: any[]
}

// 默认值
const props = withDefaults(defineProps<DataTableProps>(), {
  page: 1,
  pageSize: 15,
  rowKey: 'id',
  params: () => { return {} as Record<string, any> },
  modelValue: () => [],
})

defineExpose({
  reload,
})

// 事件
const emit = defineEmits<{
  (event: 'update:modelValue', data: any[]): void
}>()

// 计算列设置默认值
const computedColumns = computed(() => {
  return props.columns.map((column) => {
    return {
      align: column.align || 'center', // 默认居中
      ...column,
    }
  })
})

// loading
const { bool: loading, setTrue: startLoading, setFalse: endLoading } = useBoolean(false)

// 列表数据
const listData = ref(props.modelValue)
function updateListData(data: any[]) {
  listData.value = data
  emit('update:modelValue', data)
}

/**
 * 分页
 */
const pagination = ref({
  page: 1,
  pageSize: 2,
  itemCount: 0,
})

/**
 * 默认主键列
 * @param rowData
 */
function rowKey(rowData: any) {
  return rowData[props.rowKey]
}

/**
 * 请求分页数据
 */
async function requestPageData() {
  startLoading()
  // 请求数据
  const { isSuccess, data } = await request.Get<Service.PageDataResult<any>>(props.url, { params: { pageNum: pagination.value.page, pageSize: pagination.value.pageSize, ...props.params} })
  if (isSuccess) {
    updateListData(data.rows)
    pagination.value.itemCount = Number(data.total)
  }
  endLoading()
}

onMounted(() => {
  requestPageData()
})

// 重新查询
function reload() {
  pagination.value.page = 1
  requestPageData()
}


// 页码改变
function handleUpdatePage(page: number){
  pagination.value.page = page
  requestPageData()
}

// 分页大小改变
function handleUpdatePageSize(pageSize: number){
  pagination.value.page = 1
  pagination.value.pageSize = pageSize
  requestPageData()
}
</script>

<template>
  <n-data-table
    class="h-full"
    remote
    flex-height
    :loading="loading"
    :pagination="pagination"
    :row-key="rowKey"
    :columns="computedColumns"
    :data="listData"
    @update-page="handleUpdatePage"
    @update-page-size="handleUpdatePageSize"
  />
</template>

<style scoped>

</style>
