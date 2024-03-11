<!-- 
    color   字体颜色，默认为#000
    radius  圆角样式，默认为5px
    bkg     实心就是背景颜色，空心就是边框颜色
    value   文字内容
    size    字体大小，默认为15px
 -->
<script setup lang="ts">
interface Tag{
    color:string,
    radius:number,
    bkg:string,
    value:string | number | boolean,
    size:number
}
const props = withDefaults(defineProps<Tag>(),{
    color:'#000',
    radius:5,
    bkg:'#0c91eb',
    value:'',
    size:15
})

</script>

<template>
    <div class="tag" :style="{'border-radius':props.radius+'px','color':props.color,'background-color':props.bkg,'font-size':props.size+'px'}">
        {{ props.value }}
    </div>
</template>

<style scoped>
.tag{
    padding: 5px 10px;
}
</style>