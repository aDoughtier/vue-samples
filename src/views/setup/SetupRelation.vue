<template>
  <div class="setup-relation">
    <h1>setup 与 Options API 的关系</h1>
    <ul>
      <li>`Vue2` 的配置（`data`、`methos`......）中**可以访问到** `setup`中的属性、方法。</li>
      <li>但在`setup`中**不能访问到**`Vue2`的配置（`data`、`methos`......）。</li>
      <li>如果与`Vue2`冲突，则`setup`优先。</li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>
<style lang="scss">

</style>