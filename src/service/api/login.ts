import { request } from '../http'

const clientId = import.meta.env.VITE_CLIENT_ID

interface Ilogin {
  account: string
  password: string
  grantType: string
  uuid: string
  // 验证码
  code?: string
}

export function fetchLogin(params: Ilogin) {
  const methodInstance = request.Post<Service.ResponseResult<Api.Login.Info>>('/auth/login', {
    clientId,
    ...params,
  })
  methodInstance.meta = {
    authRole: null,
  }
  return methodInstance
}
export function fetchUpdateToken(data: any) {
  const method = request.Post<Service.ResponseResult<Api.Login.Info>>('/updateToken', data)
  method.meta = {
    authRole: 'refreshToken',
  }
  return method
}

export function fetchUserRoutes() {
  return request.Get<Service.ResponseResult<AppRoute.RowRoute[]> >('/auth/user/routes')
}

/**
 * 当前用户信息
 */
export function fetchUserInfo() {
  return request.Get<Service.ResponseResult<Entity.User> >('/auth/user/info')
}
