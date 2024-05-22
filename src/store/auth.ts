import { useRouteStore } from './route'
import { useTabStore } from './tab'
import { fetchLogin, fetchUserInfo } from '@/service'
import { router } from '@/router'
import { local } from '@/utils'

interface AuthStatus {
  userInfo: ApiAuth.LoginInfo | null
  token: string
}
export const useAuthStore = defineStore('auth-store', {
  state: (): AuthStatus => {
    return {
      userInfo: local.get('userInfo'),
      token: local.get('accessToken') || '',
    }
  },
  getters: {
    /** 是否登录 */
    isLogin(state) {
      return Boolean(state.token)
    },
  },
  actions: {
    /* 登录退出，重置用户信息等 */
    async resetAuthStore() {
      const route = unref(router.currentRoute)
      // 清除本地缓存
      this.clearAuthStorage()
      // 清空路由、菜单等数据
      const routeStore = useRouteStore()
      routeStore.resetRouteStore()
      // 清空标签栏数据
      const tabStore = useTabStore()
      tabStore.clearAllTabs()
      // 重制当前存储库
      this.$reset()
      // 重定向到登录页
      if (route.meta.requiresAuth) {
        router.push({
          name: 'login',
          query: {
            redirect: route.fullPath,
          },
        })
      }
    },
    clearAuthStorage() {
      local.remove('accessToken')
      local.remove('refreshToken')
      local.remove('userInfo')
    },

    /* 用户登录 */
    async login(account: string, password: string, grantType: string) {
      const { isSuccess, data } = await fetchLogin({ account, password, grantType, uuid: new Date().getTime().toString() })
      if (!isSuccess)
        return

      // 处理登录信息
      await this.handleAfterLogin(data)
    },

    /* 登录后的处理函数 */
    async handleAfterLogin(data: ApiAuth.TokenInfo) {
      const { isSuccess, data: userData } = await fetchUserInfo()
      if (!isSuccess)
        return

      // 将token和userInfo保存下来
      local.set('userInfo', userData)
      local.set('accessToken', data.access_token)
      this.token = data.access_token
      this.userInfo = userData

      // 添加路由和菜单
      const routeStore = useRouteStore()
      await routeStore.initAuthRoute()

      // 进行重定向跳转
      const route = unref(router.currentRoute)
      const query = route.query as { redirect: string }
      router.push({
        path: query.redirect || '/',
      })
    },
  },
})
