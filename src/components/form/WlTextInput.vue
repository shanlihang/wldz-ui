<script setup lang="ts">

interface WlInput{
    id?:string,
    label?:string,
    placeholder?:string,
    width?:string,
    height?:string,
    disabled:boolean
}

const props = withDefaults(defineProps<WlInput>(),{
    id:'input-a',
    width:'100%',
    height:'30px',
    placeholder:'请输入内容',
    label:'姓名',
    disabled:false
})

</script>

<template>
    <div class="wl-input">
        <div class="label">
            <label :id="props.id">{{ props.label }}</label>
        </div>
        <div class="input">
            <input
                type="text" 
                :id="props.id" 
                :placeholder="props.placeholder"
                :disabled="props.disabled"
                :style="{
                    width:props.width,
                    height:props.height,
                    
                }"
            >
        </div>
    </div>
</template>

<style scoped>
.wl-input{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.label{
    margin-right: 20px;
}
.input{
    display: flex;
    flex: 0.75 0 auto;
    align-items: center;
    justify-content: space-around;
}
.input input{
    border-radius: 6px;
    border: 1px solid #E0E0E0;
	box-shadow:none;
	outline: none;
    text-indent: 1rem;
}
.input input:focus{
    border: 1px solid #00a0fd;
}
</style>