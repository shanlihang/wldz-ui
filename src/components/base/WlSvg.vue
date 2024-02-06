<!-- svg图像组件 -->
<template>
  <div class="container">
    <div class="section" v-html="svgContent"></div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

const props = defineProps(['svgContent'])
</script>

<style scoped>
.container{
    width: 100px;
    background-color: aqua;
    height: 50px;
}
</style>