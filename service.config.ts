/** 不同请求服务的环境配置 */
export const serviceConfig: Record<ServiceEnvType, Record<string, string>> = {
  dev: {
    url: 'http://localhost:8989',
  },
  test: {
    url: 'https://mock.apifox.com/m1/4071143-0-default',
  },
  prod: {
    url: 'https://mock.apifox.com/m1/4071143-0-default',
  },
}
