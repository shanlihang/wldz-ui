<!-- 按钮组件 -->
<template>
  <div class="container" :class="style">{{btn_content}}</div>
</template>

<script setup lang="ts">
import {ref,defineProps, reactive} from 'vue'
const btn_content = ref<string>('按钮')
const style = reactive({
    link:true
})
</script>

<style scoped>
.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
}
.normal{
    width: 80px;
    height: 30px;
    border-radius: 5px;
    border:1px solid rgb(152, 54, 128);
    font-size: 18px;
}
.small{
    width: 50px;
    height: 20px;
    border-radius: 5px;
    border:1px solid rgb(152, 54, 128);
    font-size: 14px;
}
.link{
    border: 0;
    font-size: 14px;
    color: rgb(22, 97, 171);
}

</style>