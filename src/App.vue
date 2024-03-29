<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import services from '@/services'
const router = useRouter()

const loading = ref(true)
services.common.getUserInfo({
  username: "xie",
  userId: "111"
}).then(() => {
  services.common.getRouteMenu().then(res => {
    console.log(res)
    loading.value = false
    router.replace('/')
  }).catch(err => {
    console.log(err)
  })
}).catch(() => {
  loading.value = false
  router.replace("/404")
})
</script>

<template>
  <div v-if="loading" class="full-screen-loading"></div>
  <RouterView v-else />
</template>