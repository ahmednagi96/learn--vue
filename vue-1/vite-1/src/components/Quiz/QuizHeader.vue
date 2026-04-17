<script setup>
import { inject } from 'vue';

let {name}=inject("quiz");
</script>

<template>

    {{name}} 
</template>