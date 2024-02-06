<template>
  <div class="container" :style="style">
    <slot>header</slot>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref,defineProps} from 'vue'
const props = defineProps({
    height:{
        type:String,
        default:'100'
    }
})
const style = reactive({
    'height':props.height + 'px'
})


</script>

<style scoped>
.container{
    width: 100%;
    background-color: rgb(236, 245, 255);
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>