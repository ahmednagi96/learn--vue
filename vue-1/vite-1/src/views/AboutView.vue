<script setup>
import { useStorage } from '@/composables/useStorage';


let food= useStorage("food","ahmed");
let water= useStorage("water",{one:"test water"});



</script>


<template>

what is your favourite food    <input type="text"  v-model="food">
</template>