<template>
  <header>header</header>
  <main class="zx-layout">
    <VueMenu />
    <RouterView />
  </main>
  <footer>
    footer
  </footer>
</template>

<script setup lang="ts" name="Layout">
import {ref} from 'vue'
import VueMenu from './components/VueMenu.vue' 

</script>

<style scoped>
.zx-layout {

}
</style>