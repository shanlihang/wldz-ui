<!-- 菜单组件 -->
<template>
  <div class="container">
    <div class="siteInfo"></div>
    <div class="menus">
        <WlMenuItem></WlMenuItem>
        <WlMenuItem></WlMenuItem>
        <WlMenuItem></WlMenuItem>
        <WlMenuItem></WlMenuItem>
    </div>
    <div class="accountInfo"></div>
  </div>
</template>

<script setup lang="ts">
import WlMenuItem from './WlMenuItem.vue'
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
}
.menus{
    width: 100%;
}
</style>