/// <reference path="../global.d.ts"/>
/**
 * 用户信息表 模块
 */
namespace System {
  /** 用户信息表Vo */
  interface SysUserVo {
    /** 用户ID */
    userId?: string
    /** 租户编号 */
    tenantId?: string
    /** 部门ID */
    deptId?: string
    /** 用户账号 */
    account?: string
    /** 用户昵称 */
    name?: string
    /** 执法证号 */
    certificateNumber?: string
    /** 用户类型（sys_user系统用户） */
    userType?: string
    /** 用户邮箱 */
    email?: string
    /** 手机号码 */
    phone?: string
    /** 用户性别（0男 1女 2未知） */
    gender?: string
    /** 头像地址 */
    avatar?: number
    /** 密码 */
    password?: string
    /** 帐号状态（0正常 1停用） */
    status?: string
    /** 最后登录IP */
    loginIp?: string
    /** 最后登录时间 */
    loginDate?: string
    /** 备注 */
    remark?: string
  }
  /** 用户信息表Query */
  interface SysUserQuery extends PageQuery {
    /** 用户ID */
    userId?: string
    /** 租户编号 */
    tenantId?: string
    /** 部门ID */
    deptId?: string
    /** 用户账号 */
    account?: string
    /** 用户昵称 */
    name?: string
    /** 执法证号 */
    certificateNumber?: string
    /** 用户类型（sys_user系统用户） */
    userType?: string
    /** 用户邮箱 */
    email?: string
    /** 手机号码 */
    phone?: string
    /** 用户性别（0男 1女 2未知） */
    gender?: string
    /** 头像地址 */
    avatar?: number
    /** 密码 */
    password?: string
    /** 帐号状态（0正常 1停用） */
    status?: string
    /** 最后登录IP */
    loginIp?: string
    /** 最后登录时间 */
    loginDate?: string
    /** 备注 */
    remark?: string
    /**
     * 拓展参数
     */
    params?: any
  }
  /** 用户信息表Form */
  interface SysUserForm extends BaseEntity {
    /** 用户ID */
    userId?: string
    /** 租户编号 */
    tenantId?: string
    /** 部门ID */
    deptId?: string
    /** 用户账号 */
    account?: string
    /** 用户昵称 */
    name?: string
    /** 执法证号 */
    certificateNumber?: string
    /** 用户类型（sys_user系统用户） */
    userType?: string
    /** 用户邮箱 */
    email?: string
    /** 手机号码 */
    phone?: string
    /** 用户性别（0男 1女 2未知） */
    gender?: string
    /** 头像地址 */
    avatar?: number
    /** 密码 */
    password?: string
    /** 帐号状态（0正常 1停用） */
    status?: string
    /** 最后登录IP */
    loginIp?: string
    /** 最后登录时间 */
    loginDate?: string
    /** 备注 */
    remark?: string
  }
}
