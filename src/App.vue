<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LayoutView from '@/views/layout/LayoutView.vue'
import { ref } from 'vue'
import moduleName from 'axios'

const loading = ref(true)
</script>

<template>
  <div v-if="loading" class="full-loading"></div>
  <LayoutView v-else />
</template>

<style scoped>
</style>
