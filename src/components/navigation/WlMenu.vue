<!-- 
    菜单组件
 -->
<script setup lang="ts">
import { toRefs,watch } from 'vue';

interface Menu{
    width?:string,
    height?:string,
    isCollapsed?:boolean
}

const props = withDefaults(defineProps<Menu>(),{
    width:'225px',//缩小为70px
    height:'100%',
    isCollapsed:false
})


</script>

<template>
    <div :class="{menu:true,isCollapsed:true}" :style="{width:props.width,height:props.height}">
        {{isCollapsed}}
    </div>
</template>

<style scoped>
.menu{
    background-color: black;
    color: #fff;
}
.isCollapsed{
    width: 70px;
}
</style>