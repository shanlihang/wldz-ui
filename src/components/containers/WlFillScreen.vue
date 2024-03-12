<!-- 填充父元素100%宽高页面组件 -->
<template>
    <div class="container">
      <slot>父元素100%填充组件</slot>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .container{
      width: 100%;
      height: 100%;
      background-color: rgb(14, 93, 184);
  }
  </style>