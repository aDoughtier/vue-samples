<template>
  <main class="zx-layout">
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: "ZxLayout",
  beforeCreate() {
  },
  created() {

  },
  setup: () => {
    const name = ref('张三')
    const age = ref(18)
    const changeName = () => {
      name.value = '李四'
    }
    const changeAge = () => {
      age.value++
      console.log(age.value)
    }
    return {
      name, age, changeName, changeAge
    }
  },
  mounted() {
  }
})
</script>

<style scoped>
.zx-layout {
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: aquamarine;
}
</style>