<script setup lang="ts">
interface Card{
    title?:string
}
const props = withDefaults(defineProps<Card>(),{
    title:'卡片标题',
})


</script>

<template>
    <div class="card">
        <div class="up">
            <div class="title">
                {{ props.title }}
            </div>
        </div>
        <div class="down">
            <slot>卡片内容</slot>
        </div>
    </div>
</template>

<style scoped>
.card{
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-color: #fff;
}
.card .up{
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E0E0E0;
}
.card .up .title{
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 20px;
}
.card .down{
    width: 100%;
    height: 70%;
}
</style>