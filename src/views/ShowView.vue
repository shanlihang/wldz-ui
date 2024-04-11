<script setup lang="ts">
import WlCard from '../components/datashow/WlCard.vue'


</script>

<template>
    <div class="showView">
        <div style="width: 300px;height: 200px;background-color: aqua;">
            <WlCard title="123">
                <div style="width: 100%;height: 100%;"></div>
            </WlCard>
        </div>
        
    </div>
    
</template>

<style scoped>
.showView{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
