<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import services from '@/services'
import type { AxiosError } from 'axios';
import type { MenuDataType } from '@/types/menuInterface'
const router = useRouter()
const loading = ref(true)
const useNavigate = (err: AxiosError) => {
  const status = err.response?.status
  switch (status) {
    case 400:
    case 401:
    case 402:
    case 403:
    case 404:
    case 419:
      router.replace("/404")
      break;
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 519:
      router.replace("/500")
      break;
    default:
      break;
  }
}
services.common.getUserInfo({
  username: "xie",
  userId: "111"
}).then(() => {
  services.common.getRouteMenu<null, {
    menu: MenuDataType[],
    userInfo: {
      username: string,
      userId: string
    }
  }>().then(res => {
    sessionStorage.setItem('menuData', JSON.stringify(res.data.menu))
    loading.value = false
    router.replace('/')
  }).catch(err => {
    useNavigate(err)
  })
}).catch((err) => {
  loading.value = false
  useNavigate(err)
})
</script>

<template>
  <div v-if="loading" class="full-screen-loading"></div>
  <RouterView v-else />
</template>