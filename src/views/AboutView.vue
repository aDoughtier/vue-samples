<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment">Count is: {{ count }}</button>
    <el-checkbox label="你好"></el-checkbox>
    <el-button type="success">你好</el-button>
  </div>
</template>

<script setup>
//setup ：是一个标识，告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API，比如，<script setup> 中的导入和顶层变量/函数都能够在模板中直接使用。
import { ref, onMounted } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}
console.log(count)

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
