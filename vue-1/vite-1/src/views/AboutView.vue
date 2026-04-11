<script setup>
import { useFlash } from '@/composables/useFlash';
let {flash}=useFlash();

</script>
<template>
  
  
    <button @click="flash('Success !','About ','success')">
        Click Here
    </button>
        

   
</template>