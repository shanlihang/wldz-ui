<script setup lang="ts">
import WlFillScreen from '../components/containers/WlFillScreen.vue'
</script>

<template>
    <div class="showView">
        <div style="width: 500px;height: 300px;">
            <WlFillScreen></WlFillScreen>
        </div>
        
    </div>
    
</template>

<style scoped>
.showView{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
