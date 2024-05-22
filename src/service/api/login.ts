import { request } from '../http'

const clientId = import.meta.env.VITE_CLIENT_ID

interface Ilogin {
  // 请求唯一标识
  uuid: string
  // 授权类型
  grantType: string
  // 账号密码
  account: string
  password: string
  // 验证码
  code?: string
}

/**
 * 登录
 * @param params 登录参数
 */
export function fetchLogin(params: Ilogin) {
  const methodInstance = request.Post<Service.ResponseResult<ApiAuth.loginInfo>>('/auth/login', {
    clientId,
    ...params,
  })
  methodInstance.meta = {
    authRole: null,
  }
  return methodInstance
}

/**
 * 获取用户信息
 */
export function fetchUserInfo() {
  return request.Get<Service.ResponseResult<any> >('/system/user/info')
}

/**
 * 获取用户路由
 */
export function fetchUserRoutes() {
  return request.Get<Service.ResponseResult<AppRoute.RowRoute[]> >('/auth/getUserRoutes')
}
