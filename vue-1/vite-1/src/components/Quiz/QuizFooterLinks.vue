<script setup>
import { state } from '@/stores/quizStore';


</script>

<template>
  <button   @click="state.name = 'new name !'">{{ state.name }}</button> 
</template>
