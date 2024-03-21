<script setup lang="ts">

interface WlNumberInput{
    width:string,
    height:string,
}

const props = withDefaults(defineProps<WlNumberInput>(),{
    width:'100%',
    height:'30px',
})

</script>

<template>
    <div class="wl-numberInput">
        <input 
            type="number"
            :style="{
                width:props.width,
                height:props.height
            }"
        >
    </div>
</template>

<style scoped>
.wl-numberInput{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wl-numberInput input{
    border-radius: 6px;
    border: 1px solid #E0E0E0;
	box-shadow:none;
	outline: none;
    text-indent: 1rem;
}
.wl-numberInput input:focus{
    border: 1px solid #00a0fd;
}
</style>