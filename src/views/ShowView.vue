<script setup lang="ts">
import WlPopUp from '../components/feedback/WlPopUp.vue'
</script>

<template>
    <div class="showView">
        <WlPopUp :is-open="true"></WlPopUp>
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
