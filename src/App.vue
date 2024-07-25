<script setup lang="ts">
import { ref } from "vue";
import WlButton from "./components/base/wl-button.vue";
const modal = ref(null)

const open = () => {
    modal.value.openModal()
}
</script>

<template>
    <div class="root">
        <button @click="open">打开弹窗</button>
        <wl-button ref="modal"></wl-button>
    </div>
</template>

<style scoped>
.root{
    width: 100%;
    height: 100vh;
}
</style>