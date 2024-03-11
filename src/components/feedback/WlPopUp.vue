<!-- 
    
 -->
 <script setup lang="ts">
interface PopUp{
    isOpen:boolean
}

 const props = withDefaults(defineProps<PopUp>(),{
    isOpen:false
 })

 
 </script>
 
 <template>
     <div class="dialog" v-show="props.isOpen">
        <div class="container"></div>
     </div>
 </template>
 
 <style scoped>
 .dialog{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .4);
 }
 .dialog .container{
    width: 500px;
    height: 350px;
    background-color: aliceblue;
 }
 </style>