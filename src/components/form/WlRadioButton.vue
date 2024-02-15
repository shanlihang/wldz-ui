<template>
  <div :class="classList">
    {{ props.label }}
  </div>
</template>

<script lang="ts" setup>
import {ref,defineProps} from 'vue'
const props = defineProps({
  label:{
    default:'单选按钮'
  }
})
const classList = ref<Array<string>>(['container','normal'])

</script>

<style scoped>
.container{
    background-color: rgb(61, 159, 240);
    cursor: pointer;
}
.big{}
.normal{
    width:70px;
    height:30px;
    border-radius:3px;
    font-size: 12px;
    font-weight: bold;
}
.small{}
</style>