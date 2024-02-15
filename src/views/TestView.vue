<script setup lang="ts">
import WlRadioGroup from '../components/form/WlRadioGroup.vue'
import WlRadioButton from '../components/form/WlRadioButton.vue'
</script>

<template>
    <div>
        <WlRadioGroup>
            <WlRadioButton></WlRadioButton>
        </WlRadioGroup>
    </div>
    
</template>

<style scoped>
div{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
