<script setup lang="ts">
import WlMenu from '../components/navigation/WlMenu.vue'
import WlCard from '../components/datashow/WlCard.vue'
</script>

<template>
    <div class="showView">
        <div class="menu">
            <WlMenu />
        </div>
        <div class="test">
            <div class="a" style="width: 500px;height: 200px;">
                <WlCard />
            </div>
        </div>
        
    </div>
    
</template>

<style scoped>
.showView{
    width: 100%;
    height: 100%;
    display: flex;
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
