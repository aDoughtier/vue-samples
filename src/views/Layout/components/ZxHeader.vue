<template>
  <header class="zx-header">
    <a class="go-home">
      <ZxIcon type="nature" />
    </a>
    <RightTools />
  </header>
</template>
<script setup lang="ts">
import RightTools from './RightTools.vue'
</script>
<style scoped lang="scss">
.zx-header {
  height: var(--height-header);
  background: linear-gradient(45deg, #c9e195 0%, #aaef7b 100%);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .go-home {
    cursor: pointer;
    display: flex;
    align-items: center;
    .zx-icon {
      font-size: 40px;
    }
  }
}
</style>