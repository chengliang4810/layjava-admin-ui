import { request } from '../http'

interface Ilogin {
  // 客户端 ID 用于标识 客户端类型
  clientId: string
  // 授权类型
  grantType: string
  // 请求唯一标识
  uuid: string
  // 验证码
  code: string
  // 账号密码
  account: string
  password: string
}

export function fetchLogin(params: Ilogin) {
  const methodInstance = request.Post<Service.ResponseResult<ApiAuth.loginInfo>>('/login', params)
  methodInstance.meta = {
    authRole: null,
  }
  return methodInstance
}
export function fetchUpdateToken(data: any) {
  const method = request.Post<Service.ResponseResult<ApiAuth.loginInfo>>('/updateToken', data)
  method.meta = {
    authRole: 'refreshToken',
  }
  return method
}

export function fetchUserRoutes(params: { id: number }) {
  return request.Get<Service.ResponseResult<AppRoute.RowRoute[]> >('/getUserRoutes', { params })
}
