<template>
  <el-menu class="el-menu-vertical" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
    <el-menu-item index="home">
      <template #title>
        <RouterLink to="/home">
          <el-icon>
            <iconMenu />
          </el-icon>
          引言
        </RouterLink>
      </template>
    </el-menu-item>
    <el-sub-menu index="setup">
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
        <span>setup</span>
      </template>
      <el-menu-item index="feature">
        <RouterLink to="/setup/feature">特点</RouterLink>
      </el-menu-item>
      <el-menu-item index="return">
        <RouterLink to="/setup/return">返回值</RouterLink>
      </el-menu-item>
      <el-menu-item index="relation">
        <RouterLink to="/setup/relation">与 Options API 的关系</RouterLink>
      </el-menu-item>
      <el-menu-item index="1-3">
        <RouterLink to="/setup/syntactic-sugar">语法糖</RouterLink>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="vue-router">
      <template #title>
        <el-icon>
          <iconMenu />
        </el-icon>
        <span>vue-router</span>
      </template>
      <el-menu-item index="008">008_reactive创建_对象类型的响应式数据</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 256px;
  min-height: 100%;

  .el-sub-menu {
    .el-sub-menu__title {
      >span {
        font-size: 16px;
      }
    }
  }

  .el-menu-item {
    font-size: 16px;

    &.is-active {
      background-color: var(--primary-color);
      color: var(--white-color);
    }
  }

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: var(--text-color);

    &:visited {
      color: var(--text-color);
    }
  }
}
</style>