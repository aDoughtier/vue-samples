<template>
  <div class="setup-feature">
    <div>
      <h1>特点</h1>
      <ul>
        <li>`setup`函数返回的对象中的内容，可直接在模板中使用。</li>
        <li>`setup`中访问`this`是`undefined`。</li>
        <li>`setup`函数会在`beforeCreate`之前调用，它是“领先”所有钩子执行的。</li>
      </ul>
    </div>
    <div class="code">
      <h2>姓名：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">年龄+1</button>
      <button @click="showTel">点我查看联系方式</button>
    </div>
  </div>
</template>

<script lang="ts">
 export default {
    setup(){
      // 数据，原来写在data中（注意：此时的name、age、tel数据都不是响应式数据）
      let name = '张三'
      let age = 18
      let tel = '13888888888'

      // 方法，原来写在methods中
      function changeName(){
        name = 'zhang-san' //注意：此时这么修改name页面是不变化的
        console.log(name)
      }
      function changeAge(){
        age += 1 //注意：此时这么修改age页面是不变化的
        console.log(age)
      }
      function showTel(){
        alert(tel)
      }

      // 返回一个对象，对象中的内容，模板中可以直接使用
      return {name,age,tel,changeName,changeAge,showTel}
    }
  }
</script>

<style lang="scss">
.code{
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: var(--cyan-color);
  button{
    margin-right: 10px;
  }
}
</style>