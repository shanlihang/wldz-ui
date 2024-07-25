<script setup lang="ts">

interface WlInput{
    name:string,
    value:string,
    width?:string,
    height?:string,
    disabled?:boolean
}

const props = withDefaults(defineProps<WlInput>(),{
    width:'100%',
    height:'30px',
    disabled:false
})

</script>

<template>
    <div class="wl-radio">
        <input
            type="radio"
            id="1"
            :name="props.name"
            :value="props.value"
            :disabled="props.disabled"
            :style="{
                width:props.width,
                height:props.height,
                
            }"
        >
        <label for="1">123</label>
    </div>
</template>

<style scoped>
.wl-radio{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>