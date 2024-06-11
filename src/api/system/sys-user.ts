import { request } from '@/service/http'

/**
 * 查询用户信息表列表
 * @returns 用户信息表列表
 */
export function getSysUserList(params?: System.SysUserQuery) {
  return request.Get<Service.PageDataResult<System.SysUserVo>>('/system/user/page/list', { params })
}

/**
 * 查询用户信息表对象
 * @returns 用户信息表对象
 */
export function getSysUser(id: string | number) {
  return request.Get<Service.ResponseResult<System.SysUserVo>>(`/system/user/${id}`)
}

/**
 * 新增用户信息表
 */
export function addSysUser(data: System.SysUserForm) {
  return request.Post<Service.ResponseResult<any>>('/system/user', data)
}

/**
 * 更新用户信息表
 */
export function updateSysUser(data: System.SysUserForm) {
  return request.Put<Service.ResponseResult<any>>('/system/user', data)
}

/**
 * 删除用户信息表
 */
export function deleteSysUser(id: string | number | Array<string | number>) {
  return request.Delete<Service.ResponseResult<any>>(`/system/user/${id}`)
}
