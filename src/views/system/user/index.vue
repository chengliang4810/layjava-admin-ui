<script setup lang="tsx">
const queryFromRef = ref()
/**
 * 初始查询条件
 */
const initialModel = {
  condition_1: '',
  condition_2: '',
  condition_3: '',
  condition_4: '',
}
const model = ref({ ...initialModel })

const sysUserData = ref<System.SysUserVo[]>([])

// 重置查询条件
function handleResetSearch() {
  model.value = { ...initialModel }
}

// 修改
function handleEdit(row: any) {
  console.log(row)
}

// 删除
function handleDelete(id: string) {
  console.log(id)
}

// 列配置
const columns: DataTableColumns = [
  {
    title: '账号',
    key: 'account',
  },
  {
    key: 'options',
    title: '操作',
    render: (row: any) => {
      return (
        <n-space justify="center">
          <n-button
            size="small"
            onClick={() => handleEdit(row)}
          >
            编辑
          </n-button>
          <n-popconfirm onPositiveClick={() => handleDelete(row.id)}>
            {{
              default: () => '确认删除',
              trigger: () => <n-button size="small">删除</n-button>,
            }}
          </n-popconfirm>
        </n-space>
      )
    },
  },
]
</script>

<template>
  <div class="flex flex-col">
    <n-card>
      <n-form ref="queryFromRef" :model="model" label-placement="left" inline :show-feedback="false">
        <n-flex>
          <n-form-item label="姓名" path="condition_1">
            <n-input v-model:value="model.condition_1" placeholder="请输入" />
          </n-form-item>
          <n-form-item label="年龄" path="condition_2">
            <n-input v-model:value="model.condition_2" placeholder="请输入" />
          </n-form-item>
          <n-form-item label="性别" path="condition_3">
            <n-input v-model:value="model.condition_3" placeholder="请输入" />
          </n-form-item>
          <n-form-item label="地址" path="condition_4">
            <n-input v-model:value="model.condition_4" placeholder="请输入" />
          </n-form-item>
          <n-flex class="ml-auto">
            <n-button type="primary">
              <template #icon>
                <icon-park-outline-search />
              </template>
              搜索
            </n-button>
            <n-button strong secondary @click="handleResetSearch">
              <template #icon>
                <icon-park-outline-redo />
              </template>
              重置
            </n-button>
          </n-flex>
        </n-flex>
      </n-form>
    </n-card>

    <n-card class="flex-1" content-class="flex flex-col">
      <div class="flex gap-4 h-50px">
        <n-button type="primary">
          <template #icon>
            <icon-park-outline-add-one />
          </template>
          新建
        </n-button>
        <n-button strong secondary>
          <template #icon>
            <icon-park-outline-afferent />
          </template>
          批量导入
        </n-button>
        <n-button strong secondary class="ml-a">
          <template #icon>
            <icon-park-outline-download />
          </template>
          下载
        </n-button>
      </div>
      <data-table v-model="sysUserData" class="flex-1" :columns="columns" url="/system/user/page/list" row-key="deptId" />
    </n-card>
  </div>
</template>

<style scoped>

</style>
