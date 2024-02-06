<!-- 菜单项组件 -->
<template>
  <div class="container">
    <img :src="props.src" style="width:50px;height:50px;">
    <span>{{props.value}}</span>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
const props = defineProps({
    value:{
        type:String,
        default:'菜单项'
    },
    src:{
      type:String,
      default:'./cancel.png'
    }
})
</script>

<style scoped>
.container{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.container:hover{
    background-color: aqua;
    color: #fff;
}
</style>