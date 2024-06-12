<script setup lang="tsx">
import { addSysUser, deleteSysUser, updateSysUser } from '@/api/system/sys-user';
import { showError } from '@/service/http/handle';
const queryFromRef = ref()
const dataTableRef = ref()
// 新增、修改表单
const initFormData = {
  age: undefined,
}
const formData = ref<any>(Object.assign({}, initFormData))
const dataFormRef = ref<FormInst | null>(null)
// 验证规则
const dataFormRules: FormRules = {
  age: [
    {
      required: true,
      message: '请输入年龄'
    }
  ],
}

const formModel = ref<FormModelProps>({
  show: false,
  type: 'add',
  title: '新增用户'
})

// 列表数据
const sysUserData = ref<System.SysUserVo[]>([])
/**
 * 查询条件
 */
const initQueryParams = {
  name: '',
  age: undefined,
}
const queryParams = ref<any>(Object.assign({}, initQueryParams))

// 重置查询条件
function handleResetSearch() {
  queryParams.value = Object.assign({}, initQueryParams)
  dataTableRef.value?.reload()
}

// 查询
function handleQuery() {
  dataTableRef.value?.reload()
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
            onClick={() => handleEditBtn(row)}
          >
            编辑
          </n-button>
          <n-popconfirm positive-text='确定' negative-text="取消" onPositiveClick={() => handleDelete(row.id)}>
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

// 新增按钮
function handleAddBtn() {
  formModel.value = {
    title: "新增用户",
    show: true,
    type: 'add'
  }
}

// 新增
function handleAdd() {
  dataFormRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }
    const { isSuccess } = await addSysUser(formData.value)
    if (isSuccess)
      window.$message.success('新增成功')

    resetFormData()
    formModel.value.show = false
  })
}

// 修改按钮
function handleEditBtn(row: any) {
  formModel.value = {
    title: "更新用户",
    show: true,
    type: 'update'
  }
  dataFormRef.value = row;
}

// 修改数据
function handleUpdate() {
  dataFormRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }
    const { isSuccess } = await updateSysUser(formData.value)
    if (isSuccess)
      window.$message.success('更新成功')

    resetFormData()
    formModel.value.show = false
  })
}

// 重置表单数据
function resetFormData() {
  formData.value = Object.assign({}, initFormData)
}

// 删除
async function handleDelete(id: string) {
  const { isSuccess } = await deleteSysUser(id)
  if (isSuccess)
    window.$message.success('删除成功')
  await dataTableRef.value?.reload()
}

</script>

<template>
  <div class="flex flex-col gap-4">
    <n-card>
      <n-form ref="queryFromRef" :model="queryParams" label-placement="left" inline :show-feedback="false">
        <n-flex>
          <n-form-item label="姓名" path="name">
            <n-input v-model:value="queryParams.name" placeholder="请输入" />
          </n-form-item>
          <n-flex class="ml-auto">
            <n-button type="primary" @click="handleQuery">
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
        <n-button type="primary" @click="handleAddBtn">
          <template #icon>
            <icon-park-outline-add-one />
          </template>
          新增
        </n-button>
        <n-button strong secondary class="ml-a">
          <template #icon>
            <icon-park-outline-download />
          </template>
          导出
        </n-button>
      </div>

      <data-table class="flex-1" ref="dataTableRef" row-key="deptId" url="/system/user/page/list" v-model="sysUserData"
        :params="queryParams" :columns="columns" />
    </n-card>

    <!-- 表单弹窗 -->
    <n-modal v-model:show="formModel.show" preset="card" style="width: 600px;" :title="formModel.title">
      <n-form ref="dataFormRef" :model="formData" :rules="dataFormRules" label-placement="left">
        <n-grid x-gap="12" :cols="1">
          <n-form-item-gi path="age" label="年龄" :span="1">
            <n-input v-model:value="formData.age" />
          </n-form-item-gi>
        </n-grid>
      </n-form>
      <template #footer>
        <n-flex justify="center">
          <n-button v-if="formModel.type === 'add'" type="primary" @click="handleAdd">确定</n-button>
          <n-button v-else-if="formModel.type === 'update'" type="primary" @click="handleUpdate">确定</n-button>
          <n-button @click="formModel.show = false">取消</n-button>
        </n-flex>
      </template>
    </n-modal>
  </div>
</template>

<style scoped></style>
