<template>
  <main class="zx-layout">
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </main>
</template>

<!-- <script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: "ZxLayout",
  beforeCreate() {
  },
  created() {

  },
  // data() {
  //   return {
  //     name: '王五',
  //   }
  // },
  setup: () => {
    //ref函数返回一个响应式的对象
    let name = ref('张三')
    //这个属性不是响应式的
    let age = 18
    const changeName = () => {
      name.value = '李四'
    }
    const changeAge = () => {
      age++
      console.log(age)
    }
    //return才能够被模板使用
    return {
      name, age, changeName, changeAge
    }
  },
  mounted() {
  }
})
</script> -->
<script setup lang="ts" name="Layout234">
import {ref} from 'vue'
let name = '张三'
//这个属性不是响应式的
let age = ref(18)

const changeName = () => {
  name = '李四'
}
const changeAge = () => {
  age.value++
  console.log(age)
}


</script>

<style scoped>
.zx-layout {
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: aquamarine;
}
</style>