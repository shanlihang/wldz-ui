<script setup lang="ts">
import WlSvgResource from '../base/WlSvgResource.vue'
 </script>
 
 <template>
     <div class="empty">
         <div class="content">

            <WlSvgResource src="/src/assets/empty.svg" width="300" height="200"/>
         </div>
         <div class="font">
            暂无数据
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
    width: 50%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items:end;
 }
 .empty .font{
    width: 50%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a5a4a4;
 }

 </style>