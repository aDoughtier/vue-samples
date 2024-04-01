<template>
  <div class="right-tools">
    <a href="https://www.chrome.com" target="_blank">
      <ZxIcon type="chrome" />
      <span>Chrome</span>
    </a>
    <a href="https://github.com/" target="_blank">
      <ZxIcon type="github" />
      <span>github</span>
    </a>
  </div>
</template>

<style lang="scss">
.right-tools {
  height: 40px;
  min-width: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  >a {
    text-decoration: none;
    .zx-icon {
      font-size: 20px;
      margin-right: 5px;
    }
  }
}
</style>