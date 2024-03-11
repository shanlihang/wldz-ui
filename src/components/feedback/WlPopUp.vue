<!-- 
    
 -->
 <script setup lang="ts">
import WlSvgResource from '../base/WlSvgResource.vue'
interface PopUp{
    isOpen:boolean,
    title?:string,
    width?:number,
    height?:number,
}

 const props = withDefaults(defineProps<PopUp>(),{
    isOpen:false,
    title:'弹窗标题',
    width:500,
    height:300,
 })

 
 </script>
 
 <template>
     <div class="dialog" v-show="props.isOpen">
        <div class="container" :style="{width:props.width+'px',height:props.height+'px'}">
         <div class="title">
            <p>{{ props.title }}</p>
            <WlSvgResource src="/src/assets/close.svg" width="25" height="25" @click="close"/>
         </div>
        </div>
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
    border-radius: 6px;
    background-color: aliceblue;
 }
 .dialog .container .title{
   height: 40px;
   font-size: 18px;
   padding: 0 20px;
   font-weight: bold;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 2px solid rgba(0, 0, 0, .4);
 }
 </style>