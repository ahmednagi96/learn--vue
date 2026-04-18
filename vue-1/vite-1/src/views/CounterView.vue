<script setup>
import { counter } from '@/stores/counterStore';

</script>

<template>
{{ counter.count }}
<br>
     <button @click="counter.increment"> increment  </button>
</template>