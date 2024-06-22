/**
 * 菜单权限表 模块
 */
namespace System {
  /** 菜单权限表Vo */
  interface SysMenuVo {
    /** 菜单ID */
    id?: string
    /** 父菜单ID */
    pid?: string
    /** 菜单名称 */
    title?: string
    /** 路由名称 */
    name?: string
    /** 组件路径 */
    componentPath?: string
    /** 路由地址 */
    path?: string
    /** 菜单图标 */
    icon?: string
    /** 显示顺序 */
    order?: number
    /** 路由重定向 */
    redirect?: string
    /** 显示状态（0显示 1隐藏） */
    hide?: string
    /** 是否缓存（0缓存 1不缓存） */
    keepAlive?: number
    /** 菜单状态（0正常 1停用） */
    status?: string
    /** 外链URL地址 */
    href?: string
    /** 权限 */
    permissions?: string
    /** 菜单类型 dir' | 'page' */
    menuType?: string
    /** 备注 */
    remark?: string
    /** 是否需要登录权限 */
    requiresAuth?: number
    /** 当前路由是否会被添加到Tab中 */
    withoutTab?: number
    /** 当前路由是否会被固定在Tab中,用于一些常驻页面 */
    pinTab?: number
    /** 高亮菜单 */
    activeMenu?: string
  }
  /** 菜单权限表Query */
  interface SysMenuQuery extends PageQuery {
    /** 菜单ID */
    id?: string
    /** 父菜单ID */
    pid?: string
    /** 菜单名称 */
    title?: string
    /** 路由名称 */
    name?: string
    /** 组件路径 */
    componentPath?: string
    /** 路由地址 */
    path?: string
    /** 菜单图标 */
    icon?: string
    /** 显示顺序 */
    order?: number
    /** 路由重定向 */
    redirect?: string
    /** 显示状态（0显示 1隐藏） */
    hide?: string
    /** 是否缓存（0缓存 1不缓存） */
    keepAlive?: number
    /** 菜单状态（0正常 1停用） */
    status?: string
    /** 外链URL地址 */
    href?: string
    /** 权限 */
    permissions?: string
    /** 菜单类型 dir' | 'page' */
    menuType?: string
    /** 备注 */
    remark?: string
    /** 是否需要登录权限 */
    requiresAuth?: number
    /** 当前路由是否会被添加到Tab中 */
    withoutTab?: number
    /** 当前路由是否会被固定在Tab中,用于一些常驻页面 */
    pinTab?: number
    /** 高亮菜单 */
    activeMenu?: string
    /**
     * 拓展参数
     */
    params?: any
  }
  /** 菜单权限表Form */
  interface SysMenuForm extends BaseEntity {
    /** 菜单ID */
    id?: number
    /** 父菜单ID */
    pid?: number | null
    /** 菜单名称 */
    title?: string
    /** 路由名称 */
    name?: string
    /** 组件路径 */
    componentPath?: string
    /** 路由地址 */
    path?: string
    /** 菜单图标 */
    icon?: string
    /** 显示顺序 */
    order?: number
    /** 路由重定向 */
    redirect?: string
    /** 显示状态（0显示 1隐藏） */
    hide?: boolean
    /** 是否缓存（0缓存 1不缓存） */
    keepAlive?: boolean
    /** 菜单状态（0正常 1停用） */
    status?: boolean
    /** 外链URL地址 */
    href?: string
    /** 权限 */
    permissions?: string
    /** 菜单类型 dir' | 'page' */
    menuType?: string
    /** 备注 */
    remark?: string
    /** 是否需要登录权限 */
    requiresAuth?: boolean
    /** 当前路由是否会被添加到Tab中 */
    withoutTab?: boolean
    /** 当前路由是否会被固定在Tab中,用于一些常驻页面 */
    pinTab?: boolean
    /** 高亮菜单 */
    activeMenu?: string

    roles?: string
  }
}
