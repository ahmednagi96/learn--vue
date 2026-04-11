
<script setup>


import { useFlash } from '@/composables/useFlash';

let {flash}=useFlash();
</script>

<template>
    <button @click="flash('Succcess !','Contact Us ')">Click Here</button>
</template>