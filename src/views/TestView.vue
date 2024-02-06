<script setup lang="ts">
import WlMenu from '../components/menus/WlMenu.vue'
import WlMenuItem from '../components/menus/WlMenuItem.vue'
</script>

<template>
    <div>
        <WlMenu>
            <WlMenuItem></WlMenuItem>
            <WlMenuItem></WlMenuItem>
            <WlMenuItem></WlMenuItem>
            <WlMenuItem></WlMenuItem>
        </WlMenu>
    </div>
</template>

<style scoped>
div{
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
