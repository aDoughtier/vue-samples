import axios from "axios"
import { getToken, setToken } from './cookie'
import type { AxiosRequestConfig } from 'axios'
import { isObject } from "./isObject"
import { ElMessage } from 'element-plus'


axios.defaults.baseURL = window.ZxConfig.baseUrl
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
    if (!isObject(data)) {
      ElMessage({
        message: 'data参数必须是对象',
        type: 'error'
      })
      return
    }
    console.log(data)
    axios[method](url, data)
      .then(res => {
        const { status, data: resData, message } = res.data
        if (status === 200) {
          resolve(res.data)
        }
      })
      .catch(err => {
        const response = err.response || {}

      })

  })
}