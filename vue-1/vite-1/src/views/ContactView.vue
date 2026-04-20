<script setup>
import Quiz from "@/components/Quiz/Quiz.vue";
import { useFlash } from "@/composables/useFlash";
let { flash } = useFlash();

</script>

<template>
  <!-- <button @click="flash('Succcess !','Contact Us ')">Click Here</button> -->
  <Quiz />
</template>
