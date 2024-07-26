<template>
    <template v-if="type == 'link'">
        <span :class="[
            `size-${size}`,
            'type-link'
        ]"
        :style="{
            color:fontColor
        }"><slot>文字按钮</slot></span>
    </template>
    <template v-else>
        <button class="wl-button" :class="[
            `size-${size}`,
            `type-${type}`
        ]"
        :disabled="disabled"
        :style="{
            backgroundColor:bgcolor,
            color:fontColor
        }">
            <slot>按钮</slot>
        </button>
    </template>
    
</template>

<script setup lang="ts">

const props = defineProps({
    size:{
        type:String,
        default:'middle'
    },
    type:{
        type:String,
        default:'block'
    },
    disabled:{
        type:Boolean,
        default:false
    },
    fontColor:{
        type:String,
        default:"#a35c8f"
    },
    bgcolor:{
        type:String,
        default:"#a0a0a0"
    }
})

</script>

<style scoped>
.wl-button{
    border: 0;
}
.size-small{
    width: 70px;
    height: 30px;
    font-size: 12px;
}
.size-middle{
    width: 100px;
    height: 40px;
    font-size: 18px;
}
.size-large{
    width: 150px;
    height: 60px;
    font-size: 24px;
}

.type-link{
    cursor: pointer;
}
.type-block{
    display: block;
    border-radius: 6px;
    /* border: 0; */
}
</style>