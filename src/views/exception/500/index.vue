<script lang="ts" setup name="NetworkError">
import { useRouter } from 'vue-router'
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="net-error-wrapper">
    <header class="space-y-2">
      <h2>500 Server error</h2>
      <img src="../icons/500.svg" alt="500" class="net-error-img" />
    </header>
    <el-button type="primary" @click="goHome">
      Go to Home
    </el-button>
  </div>
</template>

<style scoped>
.net-error-wrapper {
  width: 600px;
  margin: 0 auto;
  margin-top: 200px;
  text-align: center;

  .net-error-img {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
}
</style>
