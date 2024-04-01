<template>
  <div class="zx-login-wrapper">
    <el-form ref="form" :model="form" label-width="80px" class="zx-login">
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup name="Login">
import { reactive } from 'vue'
const form = reactive({
  name: '',
  password: ''
})
const onSubmit = () => {
  console.log('submit!')
}
</script>
<style scoped lang="scss">
.zx-login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* 可以相对路径引入，也可以直接通过@符号引入其他文件夹得图片（更方便），react需要加~ */
  background: url('@/views/Login/assets/images/login-bg.jpg');
  background-size: cover;

  .zx-login {
    width: 500px;
    padding: 20px;
    background: rgb(213 160 16 / 32%);
    border: 1px solid rgb(213 160 16 / 62%);
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(213 160 16 / 92%);
    backdrop-filter: blur(1px);
  }
}
</style>