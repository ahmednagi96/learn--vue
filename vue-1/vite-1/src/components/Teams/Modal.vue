
<script setup>
import { Transition } from 'vue';


defineProps({
    showModal:Boolean
});

</script>

<template>
  <transition name="modal">
    <div v-if="showModal" class="modal-overlay" @click.self="$emit('close')">
      
      <div class="modal-container">
        <div class="modal-header">
          <h2>Header</h2>
          <button class="close-btn" @click="$emit('close')">&times;</button>
        </div>

        <div class="modal-body">
          <slot name="form"></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <h3>Footer</h3>
            <button class="btn-action" @click="$emit('close')">Close</button>
          </slot>
        </div>
      </div>

    </div>
  </transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 2. تأثير الـ Overlay (الخلفية السوداء) */
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* 3. تأثير الصندوق (الـ Container) */
/* نستخدم الـ Nested Selectors لجعل الصندوق يتحرك بشكل مختلف عن الخلفية */
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  opacity: 0;
  transform: scale(0.9) translateY(-30px); /* يبدأ أصغر قليلاً ومزاح للأعلى */
}

.modal-enter-active .modal-container {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* تأثير ارتداد بسيط (Elastic) */
}
/* 1. خلفية المودال (التعتيم) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* تعتيم بنسبة 50% */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: black;
}

/* 2. صندوق المحتوى */
.modal-container {
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
}

/* 3. تنسيق الأجزاء الداخلية */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.modal-body {
  padding: 20px 0;
}

.modal-footer {
  border-top: 1px solid #eee;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* زر الإغلاق (X) */
.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.btn-action {
  background-color: #42b883;
  color: rgb(20, 10, 10);
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

/* أنيميشن بسيط لظهور المودال */
@keyframes fadeIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>