<script lang="ts" setup name="NotFound">
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="not-found-wrapper">
    <h2> Sorry, page not found! </h2>
    <img src="../icons/404.svg" alt="404">
    <div>
      <el-button type="primary" @click="goHome">
        Go to Home
      </el-button>
    </div>
  </div>
</template>

<style scoped>
.not-found-wrapper {
  width: 600px;
  margin: 0 auto;
  margin-top: 200px;
  text-align: center;

  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
}
</style>
