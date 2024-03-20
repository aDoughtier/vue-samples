import axios from "axios"
import { getToken, setToken } from './cookie'
import type { AxiosRequestConfig } from 'axios'


axios.defaults.baseURL = window.ZxConfig.baseUrl
axios.defaults.timeout = 2 * 60 * 1000
axios.defaults.headers.common['Authorization'] = getToken()
type Method = 'get' | 'post' | 'put' | 'delete' | 'patch'

interface AjaxDataProps extends AxiosRequestConfig {
  method?: Method;
  url: string;
  data?: any;
  onUploadProgress?: AxiosRequestConfig["onUploadProgress"]
}