<script setup>
import QuizFooter from './QuizFooter.vue';
import QuizHeader from './QuizHeader.vue';
import QuizQuestion from './QuizQuestion.vue'; 

</script>

<template>
    <div class="quiz-container">
      <header class="quiz-header-wrapper">
        <QuizHeader />
      </header>
  
      <main class="quiz-content">
        <QuizQuestion />
      </main>
  
      <footer  class="quiz-footer-wrapper">
        <QuizFooter />
      </footer>
    </div>
  </template>
  
  <style scoped>
  /* الحاوية الرئيسية */
  .quiz-container {
    max-width: 700px;
    margin: 40px auto; /* الـ 40 اللي كنت كاتبها */
    padding: 30px;
    background-color: #191915;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    border: 1px solid #f0f0f0;
    display: flex;
    flex-direction: column;
    gap: 20px; /* مسافة ثابتة بين كل المكونات */
    font-family: sans-serif;
  }
  
  /* تنسيق الهيدر */
  .quiz-header-wrapper {
    border-bottom: 2px solid #a29898;
    padding-bottom: 15px;
  }
  
  /* منطقة السؤال (المحتوى الأساسي) */
  .quiz-content {
    min-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
  }
  
  /* الفوتر */
  .quiz-footer-wrapper {
    margin-top: 10px;
    padding-top: 20px;
    border-top: 1px solid #aaa7a7;
  }
  
  /* تحسين شكل الموبايل */
  @media (max-width: 600px) {
    .quiz-container {
      margin: 20px;
      padding: 20px;
    }
  }
  </style>