<!-- 菜单项组件 -->
<template>
  <div class="container">
    <div class="section">
      <span>{{props.value}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
const props = defineProps({
    value:{
        type:String,
        default:'菜单项'
    }
})
</script>

<style scoped>
.container{
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    border-radius: 10px;
}
.container .section{
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
}
.section:hover{
    background-color: rgb(32, 33, 35);
    color: #fff;
}
</style>