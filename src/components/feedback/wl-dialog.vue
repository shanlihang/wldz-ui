<template>
    <div v-if="isVisible" class="modal-overlay" @click="handleOverlayClick">
        <div class="modal-content" @click.stop> <!-- 使用.stop修饰符阻止点击事件冒泡 -->
            <div class="top">
                <div class="title">{{props.title}}</div>
                <div class="icon" @click="closeModal">
                    <svg t="1721750774592" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4247" width="24" height="24"><path d="M822.00345 776.822434l0.022513-0.022513L246.50423 201.317075c-5.78782-5.791913-13.785981-9.374508-22.621207-9.374508-17.662265 0-31.980365 14.3181-31.980365 31.980365 0 8.834202 3.582595 16.832364 9.373485 22.620184L776.11226 821.339324c5.838985 6.277984 14.166651 10.209526 23.416316 10.209526 17.662265 0 31.980365-14.3181 31.980365-31.980365C831.508941 790.667767 827.871087 782.620487 822.00345 776.822434z" p-id="4248" fill="#8a8a8a"></path><path d="M776.783549 201.448058l-0.022513-0.022513L201.278189 776.947278c-5.791913 5.78782-9.374508 13.785981-9.374508 22.621207 0 17.662265 14.3181 31.980365 31.980365 31.980365 8.834202 0 16.832364-3.582595 22.620184-9.373485l574.797231-574.836117c6.277984-5.838985 10.209526-14.166651 10.209526-23.416316 0-17.662265-14.3181-31.980365-31.980365-31.980365C790.628882 191.942567 782.580578 195.58042 776.783549 201.448058z" p-id="4249" fill="#8a8a8a"></path></svg>
                </div>
            </div>
            <slot>
                <div>默认内容区</div>
            </slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    title:{
        type: String,  
        required: false,  
        default: '默认标题'
    }
})

const isVisible = ref(false);

const openModal = () => {
    isVisible.value = true;
};

const closeModal = () => {
    isVisible.value = false;
};

const handleOverlayClick = (event) => {
    if (!event.target.classList.contains('modal-content')) {
        closeModal();
    }
};

defineExpose({
    openModal,
    closeModal
});
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 0 20px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 300px;
    text-align: center;
}
.top{
    width: 100%;
    height: 50px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom: 20px;
}
.top .title{
    height: 50px;
    line-height: 50px;
    color: #2e2e2e;
    font-weight: bold;

}
.top .icon{
    width: 30px;
    height: 30px;
    cursor: pointer;
}
</style>