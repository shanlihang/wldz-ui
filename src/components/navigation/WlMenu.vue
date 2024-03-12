<!-- 
    菜单组件
 -->
<script setup lang="ts">
const props = withDefaults(defineProps(),{
    width:500,
    height:100
})

</script>

<template>
    <div class="menu" :style="{width:props.width+'px',height:props.height+'px'}">
        123456
    </div>
</template>

<style scoped>
.menu{
    background-color: black;
}
</style>