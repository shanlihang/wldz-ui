<!-- 全屏页面组件 -->
<template>
  <div class="container">
    <slot>全屏布局组件</slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container{
    width: 100%;
    height: 100vh;
    background-color: rgb(236, 245, 255);
}
</style>