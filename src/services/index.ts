import { ajax } from "@/utils/ajax.config"

const common = {
  // 获取用户信息
  getUserInfo: <T, U>(data: T) => {
    return ajax<U>({
      url: "/api/v1/common/config",
      method: 'get',
      data
    })
  },
  getRouteMenu: <T, U>(data: T) => {
    return ajax<U>({
      url: "/api/v1/common/route-menu",
      method: 'get',
      data
    })
  },
}

export default {
  common
}