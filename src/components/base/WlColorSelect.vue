<!-- 全屏页面组件 -->
<template>
  <div class="colorSelect" :style="{'background':bkgColor}">
    <div class="colorInfo">
        当前色值：<span style="border-bottom: 3px solid #000 ;">{{ bkgColor }}</span>
    </div>
    <div class="colorDivs">
        <div class="colorDiv" @click="changeBkg(item.code)" v-for="item in colorList" :key="item.id" :style="{'background':item.code}">
            <p>{{ item.name }}</p>
        </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'

interface ColorList{
    id:number,
    name:string,
    code:string,
}

const bkgColor = ref<string>('#fff')

const colorList = reactive<Array<ColorList>>([
    {id:1,name:'麦苗绿',code:'#55bb8a'},
    {id:2,name:'香叶红',code:'#f07c82'},
    {id:3,name:'茶花红',code:'#ee3f4d'},
    {id:4,name:'暗玉紫',code:'#5c2223'},
    {id:5,name:'葡萄紫',code:'#4c1f24'},
    {id:6,name:'苍蝇灰',code:'#36282b'},
    {id:7,name:'夜色淡入淡出',code:'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'},
    
])

//点击切换背景色
const changeBkg = (color:string) => {
    bkgColor.value = color;
}
</script>

<style scoped>
.colorSelect{
    width: 100%;
    height: 100%;
    display: block;
}
.colorSelect .colorDivs{
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.colorSelect .colorDivs .colorDiv{
    width: 100px;
    height: 100px;
    border-radius: 6px;
    margin: 50px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
}
.colorSelect .colorInfo{
    width: 100%;
    height: 10%;
    line-height: 10vh;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
}
</style>