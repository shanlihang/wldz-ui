<script setup lang="ts">
import WlDrawer from '../components/feedback/WlDrawer.vue'

import {ref} from 'vue'

const a = ref(false)
</script>

<template>
    <div class="showView">
        <button @click="a=!a">打开</button>
        <WlDrawer :showDrawer="a" />
        
    </div>
    
</template>

<style scoped>
.showView{
    width: 100%;
    height: 100%;
    /* display: flex; */
}
.menu{
    height: 100%;
    overflow: hidden;
}
.test{
    height: 100%;
    flex: 1 0 auto;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
