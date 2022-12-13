<template>
  <div class="workflow-container">
    <div class="workflow-menu">
      <a-menu id="layout-menu" mode="inline" v-model:openKeys="openKeys" @click="handleClick">
        <a-sub-menu key="group1">
          <template #title>编排</template>
          <div v-for="item in routes" :key="item.path">
            <a-sub-menu v-if="item.children" key="item.name">
              <template #title>{{ item.label }}</template>
              <a-menu-item v-for="subItem in item.children" :key="subItem.path">{{
                  subItem.label
              }}</a-menu-item>
            </a-sub-menu>
            <a-menu-item v-else :key="item.path">{{ item.label }}</a-menu-item>
          </div>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="workflow-content">
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';



import routes from './router/config';
import router from './router';
const openKeys = ref<string[]>(['group1']);
// @ts-ignore
const handleClick: any = (e: Event): void => {
  console.log('click', e);
  // @ts-ignore
  router.push(e.key);
};
</script>
<style lang="less" scoped>
.workflow-container {
  display: flex;
  height: 100vh;

  .workflow-menu {
    width: 200px;
  }

  .workflow-content {
    flex: 1;
    width: 0;
    background-color: #F0F2F5;

  }
}
</style>
