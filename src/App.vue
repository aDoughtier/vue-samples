<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LayoutView from '@/views/layout/LayoutView.vue'
import { ref } from 'vue'
import services from '@/services'

const loading = ref(true)
services.common.getUserInfo({
  username: "xie",
  userId: "111"
}).then((res) => {
  console.log(res.data)
  loading.value = false
}).catch(err => {

})
</script>

<template>
  <div v-if="loading" class="full-loading"></div>
  <LayoutView v-else />
</template>

<style scoped>

</style>
