<script setup>
import Quiz from "@/components/Quiz/Quiz.vue";
import { useFlash } from "@/composables/useFlash";
import { provide } from "vue";

let { flash } = useFlash();

let quiz = {
  name: "ahmed nagi",
  questions: ["question 1", "question 2"],
};

</script>

<template>
  <!-- <button @click="flash('Succcess !','Contact Us ')">Click Here</button> -->
  <Quiz :quiz="quiz"/>
</template>
