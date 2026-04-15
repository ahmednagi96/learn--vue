<script setup>
import TabbableTextArea from '@/components/TabbableTextArea.vue';


let label=$ref("text here !");

 setTimeout(()=>{label="changed !"},2000);


</script>

<template>
   <TabbableTextArea v-model:label="label"/>
  </template>
  