<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LayoutView from '@/views/layout/LayoutView.vue'
import { ref } from 'vue'
import services from '@/services/index'

const loading = ref(true)
services.common.getUserInfo({
  username: "xie",
  userId: "111"
}).then((res) => {

}).catch(err => {

})
</script>

<template>
  <div v-if="loading" class="full-loading"></div>
  <LayoutView v-else />
</template>

<style scoped></style>
