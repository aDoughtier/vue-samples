<template>
  <ZxHeader />
  <main class="zx-layout">
    <div class="zx-menu">
      <VueMenu />
    </div>
    <div class="zx-content"><router-view /></div>
  </main>
  <ZxFooter />
</template>

<script setup lang="ts" name="Layout">
import { ref } from 'vue'
import VueMenu from './components/VueMenu.vue'
import ZxHeader from './components/ZxHeader.vue'
import ZxFooter from './components/ZxFooter.vue'

</script>

<style scoped lang="scss">
@import '@/assets/css/mixins.scss';

.zx-layout {
  display: flex;
  column-gap: 20px;
  height: calc(100vh - var(--height-header) - var(--height-footer));
  margin: var(--height-header) 0 var(--height-footer) 0;

  .zx-menu {
    @include scrollBar();

  }

  .zx-content {
    @include scrollBar();
    flex: 1;
  }
}
</style>