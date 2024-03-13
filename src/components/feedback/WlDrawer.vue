<script setup lang="ts">
import WlSvgResource from '../base/WlSvgResource.vue'
import {ref,reactive,onMounted} from 'vue'
interface DrawerOptions{
    width?:number|string,
    height?:number|string,
    top?:0,
    bottom?:0,
    left?:0,
    right?:0
}

const props = withDefaults(defineProps<DrawerOptions>(),{
    width:'100%',
    height:'500px'
})

const top = reactive<DrawerOptions>({
    width:props.width,
    height:props.height,
    top:0,
})

const bottom = reactive<DrawerOptions>({
    width:props.width,
    height:props.height,
    bottom:0
})

const left = reactive<DrawerOptions>({
    width:props.width,
    height:props.height,
    left:0
})

const right = reactive<DrawerOptions>({
    width:props.width,
    height:props.height,
    right:0
})

const style = ref()


//关闭抽屉事件
const closeDrawer = () => {

}

onMounted(() => {

    style.value = bottom
})
</script>

<template>
    <div class="drawer">
        <div class="inner" :style="style">
            <div class="title">
                <p>抽屉信息</p>
                <WlSvgResource src="/src/assets/imgs/icon/close.svg" width="25" height="25" @click="closeDrawer" />
            </div>
            <div class="content">
                <slot>抽屉内容</slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.drawer{
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(0, 0, 0, .4);
    position: relative;
    z-index: 1;
}
.drawer .inner{
    background-color: #fff;
    position: absolute;
}
.drawer .title{
    box-sizing: border-box;
    padding: 0 25px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F0F0F0;
    
}
</style>