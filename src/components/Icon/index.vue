<template>
  <span class="zx-icon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${props.type}`"></use>
    </svg>
  </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps(['type'])

</script>

<style lang="scss">
/* iconfont */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>