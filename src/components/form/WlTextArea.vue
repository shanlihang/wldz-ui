<script setup lang="ts">

interface WlInput{
    placeholder?:string,
    width?:string,
    height?:string,
    disabled:boolean
}

const props = withDefaults(defineProps<WlInput>(),{
    width:'100%',
    height:'80px',
    placeholder:'请输入内容',
    disabled:false
})

</script>

<template>
    <div class="wl-input">
        <textarea
            :placeholder="props.placeholder"
            :disabled="props.disabled"
            :style="{
                width:props.width,
                height:props.height,
                
            }"
        ></textarea>
    </div>
</template>

<style scoped>
.wl-input{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wl-input textarea{
    border-radius: 6px;
    border: 1px solid #E0E0E0;
	box-shadow:none;
	outline: none;
    text-indent: 1rem;
}
.wl-input textarea:focus{
    border: 1px solid #00a0fd;
}
</style>