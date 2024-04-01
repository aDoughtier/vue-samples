import axios from "axios"
import { useRouter } from 'vue-router'
import { getToken, setToken } from './cookie'
import type { AxiosRequestConfig } from 'axios'
import { isObject } from "./isObject"
import { ElMessage } from 'element-plus'

// axios.defaults.baseURL = window.ZxConfig.baseUrl
axios.defaults.timeout = 2 * 60 * 1000
axios.defaults.headers.common['Authorization'] = getToken()
type Method = 'get' | 'post' | 'put' | 'delete' | 'patch'

export interface AjaxDataProps extends AxiosRequestConfig {
  method?: Method;
  url: string
}
//响应的数据类型
export interface AjaxResponseProps<T> {
  status: number;
  message: string;
  data: T;
  [key: string]: any;
}

export function ajax<T>(config: AjaxDataProps) {
  return new Promise<AjaxResponseProps<T>>((resolve, reject) => {
    const { method = 'get', url, data } = config
    // if (!isObject(data)) {
    //   ElMessage({
    //     message: 'data参数必须是对象',
    //     type: 'error'
    //   })
    //   return
    // }
    // console.log(data)
    axios[method](url, data)
      .then(res => {
        resolve(res.data)
        // }
      })
      .catch(err => {
        console.log(err)
        const response = err.response || {}
        const { status } = response
        switch (status) {
          case 400:
          case 401:
          case 402:
          case 403:
          case 404:
          case 419:
            // window.location.href = '/404'
            break;
          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
          case 519:
            // window.location.href = '/500'
            break;
          default:
            break;
        }
        reject(err)

      })

  })
}