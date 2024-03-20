<script setup lang="ts">
import WlSvgResource from '../base/WlSvgResource.vue'
 </script>
 
 <template>
     <div class="empty">
         <div class="content">
            <WlSvgResource src="/src/assets/icon/empty.svg" width="200" height="150"/>
            <div class="font">
               暂无数据
            </div>
         </div>
         
     </div>
 </template>
 
 <style scoped>
 .empty{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
 }
 .empty .content{
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
 }
 .font{
   color:rgba(0, 0,0,.2)
 }
 

 </style>