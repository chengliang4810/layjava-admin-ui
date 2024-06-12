/* 存放数据库实体表类型， 具体内容在 ./entities */
declare namespace Entity {
}

/* 各类接口返回的数据类型， 具体内容在 ./api */
declare namespace Api {

}

interface Window {
  $loadingBar: import('naive-ui').LoadingBarApi
  $dialog: import('naive-ui').DialogApi
  $message: import('naive-ui').MessageApi
  $notification: import('naive-ui').NotificationApi
}

declare const AMap: any
declare const BMap: any

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent
  export default component
}

declare namespace NaiveUI {
  type ThemeColor = 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
}

declare namespace Storage {
  interface Session {
    demoKey: string
  }

  interface Local {
    /* 存储用户信息 */
    userInfo: Api.Login.Info
    /* 存储访问token */
    accessToken: string
    /* 存储刷新token */
    refreshToken: string
    /* 存储登录账号 */
    loginAccount: any
    /* 存储当前语言 */
    lang: App.lang
  }
}

declare namespace App {
  type lang = 'zhCN' | 'enUS'
}

declare global {

  // 分页查询参数
  interface PageQuery {
    pageNum: number
    pageSize: number
  }

  // 表单弹窗参数
  interface FormModelProps {
    show: boolean,
    type: 'add' | 'update' | string,
    title?: string
  }
}

