<script setup lang="ts">
import { ref } from "vue";
import WlDialog from "./components/feedback/wl-dialog.vue";
const modal = ref(null)

const open = () => {
    modal.value.openModal()
}
</script>

<template>
    <div class="root">
        <button @click="open">打开弹窗</button>
        <wl-dialog ref="modal"></wl-dialog>
    </div>
</template>

<style scoped>
.root{
    width: 100%;
    height: 100vh;
}
</style>