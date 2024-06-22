import { request } from '@/service/http'

/**
 * 查询菜单权限表列表
 * @returns 菜单权限表列表
 */
export function getSysMenuList(params?: System.SysMenuQuery) {
  return request.Get<Service.PageDataResult<System.SysMenuVo>>('/system/menu/page/list', { params })
}

/**
 * 查询菜单权限表对象
 * @returns 菜单权限表对象
 */
export function getSysMenu(id: string | number) {
  return request.Get<Service.ResponseResult<System.SysMenuVo>>(`/system/menu/${id}`)
}

/**
 * 新增菜单权限表
 */
export function addSysMenu(data: System.SysMenuForm) {
  return request.Post<Service.ResponseResult<any>>('/system/menu', data)
}

/**
 * 更新菜单权限表
 */
export function updateSysMenu(data: System.SysMenuForm) {
  return request.Put<Service.ResponseResult<any>>('/system/menu', data)
}

/**
 * 删除菜单权限表
 */
export function deleteSysMenu(id: string | number | Array<string | number>) {
  return request.Delete<Service.ResponseResult<any>>(`/system/menu/${id}`)
}
