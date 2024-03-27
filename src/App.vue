<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import services from '@/services'
const router = useRouter()

const loading = ref(true)
try {
  const userInfo = await services.common.getUserInfo({
    username: "xie",
    userId: "111"
  })
  console.log(userInfo)
  const routeMenu = await services.common.getRouteMenu({

  })
} catch (error) {
  loading.value = false
  router.replace("/login")
}
</script>

<template>
  <div v-if="loading" class="full-screen-loading"></div>
  <RouterView v-else />
</template>