/* 接口类型数据 */

/** 后端返回的用户相关类型 */
declare namespace ApiAuth {
  /* 登录返回的用户字段 */
  interface TokenInfo {
    /* 过期时间 */
    expire_in?: number
    /** 访问toekn */
    access_token: string
    /** clientId */
    client_id: string
  }

  interface LoginInfo {
    /* 过期时间 */
    expire_in?: number
    /** 访问toekn */
    access_token: string
    /** clientId */
    client_id: string
  }
}
declare namespace CommonList {
  /* 返回的性别类型 */
  type GenderType = '0' | '1' | null
  interface UserList {
    id: number
    name: string
    age: number
    gender: GenderType
    email: string
    address: string
    role: Auth.RoleType
    disabled: boolean
  }
}
