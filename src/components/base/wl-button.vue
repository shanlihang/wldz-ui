<template>
    <div class="wl-button" :class="[
        `size-${size}`
    ]">
        123
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

const props = defineProps({
    size:{
        type:String,
        default:'normal'
    }
})

const styleFlag = reactive({

})

</script>

<style scoped>
.wl-button{
    border-radius: 6px;
    border: 1px solid saddlebrown;
}
.size-normal{
    width: 100px;
    height: 40px;
}
</style>