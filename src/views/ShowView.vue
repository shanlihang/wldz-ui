<script setup lang="ts">
import WlRadio from '../components/form/WlRadio.vue'


</script>

<template>
    <div class="showView">
        <div style="width: 300px;height: 200px;background-color: aqua;">
            <WlRadio value="123" name="123" />
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
