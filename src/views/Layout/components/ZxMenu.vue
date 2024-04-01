<template>
  <el-menu class="el-menu-vertical" :default-active="menuData[0].path">
    <template v-for="item in menuData" :key="item.path">
      <el-menu-item :index="item.path" v-if="!item.children" class="zx-menu-item">
        <RouterLink to="/home" :title="item.text" class="zx-menu-item-with-icon">
          <ZxIcon :type="item.icon" />
          <span class="text"> {{ item.text }}</span>
        </RouterLink>
      </el-menu-item>
      <el-sub-menu :index="item.path" v-else class="zx-sub-menu">
        <template #title>
          <div class="zx-menu-title">
            <ZxIcon :type="item.icon" />
            <span>{{ item.text }}</span>
          </div>
        </template>
        <template v-for="it in item.children" :key="it.path">
          <el-menu-item :index="it.path" class="zx-menu-item">
            <RouterLink :to="it.path" :title="it.text">{{ it.text }}</RouterLink>
          </el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'
import { RouterLink } from 'vue-router'
import type { MenuDataType } from '@/types/menuInterface'
const menuData = shallowRef<MenuDataType[]>(JSON.parse(sessionStorage.getItem('menuData') || "") || [])

</script>

<style scoped lang="scss">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 256px;
  min-height: 100%;

  >.zx-menu-item {
    padding: 0 12px;

    .zx-icon {
      margin-right: 5px;
    }
  }

  .zx-menu-item {
    font-size: 16px;

    &.is-active {
      background-color: var(--primary-color);
      color: var(--white-color);

      .zx-icon {
        color: var(--white-color);
      }
    }
  }

  .zx-menu-title {
    font-size: 16px;
    margin-left: -8px;

    .zx-icon {
      margin-right: 5px;
    }
  }

  a {
    width: 100%;
    text-decoration: none;
    color: var(--text-color);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    .zx-icon {
      margin-right: 5px;
      display: flex;
    }

    &:visited {
      color: var(--text-color);
    }

    &.zx-menu-item-with-icon {
      display: flex;
      align-items: center;

      .text {
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &.router-link-active {
      .zx-icon {
        color: var(--white-color)
      }
    }
  }
}
</style>