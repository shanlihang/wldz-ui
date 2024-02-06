<!-- 侧边栏容器组件 -->
<template>
  <div class="container" :style="style">
    <slot>侧边栏容器</slot>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref,defineProps} from 'vue'
const props = defineProps({
    width:{
      type:String,
      default:'300'
    },
    height:{
        type:String,
        default:'800'
    }
})
const style = reactive({
  'width':props.width + 'px',
  'height':props.height + 'px'
})
</script>


<style scoped>
.container{
    width: 300px;
    height: 100vh;
    background-color: rgb(236, 245, 255);
}
</style>