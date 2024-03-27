/// <reference types="vite/client" />

declare interface Window {
  ZxConfig: {
    baseUrl: string,
    apiHost: string
    sysText: string
  }
}
//解决引入vue文件报找不到声明的问题
declare module '*.vue' {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
