<!-- 菜单组件 -->
<template>
  <div class="container">
    <div class="siteInfo"></div>
    <div class="menus">
        <slot></slot>
    </div>
    <div class="accountInfo"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    position: relative;
}
.menus{
    width: 100%;
}
</style>