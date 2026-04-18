<script setup>
import Quiz from "@/components/Quiz/Quiz.vue";
import { useFlash } from "@/composables/useFlash";
import { counter } from "@/stores/counterStore";
let { flash } = useFlash();

</script>

<template>
  my count is {{ counter.count }}
  <!-- <button @click="flash('Succcess !','Contact Us ')">Click Here</button> -->
  <Quiz />
</template>
