<script setup>
import { ref, watch } from 'vue';


let inputType=ref("password");
let txtPassword=ref("");
let msg=ref("you must write password !");
let msgStatus=ref("normal");

watch(txtPassword,()=>{
    if(txtPassword.value == "" || txtPassword.value.length ===0){
        msg.value="you must write password";
        msgStatus.value="normal";
    }else if(txtPassword.value.length > 0 && 4 >= txtPassword.value.length ){
        msg.value="this password is too short";
        msgStatus.value="small";
    }else if(txtPassword.value.length > 4 && 8 >= txtPassword.value.length ){
        msg.value="this password is medium";
        msgStatus.value="medium";
    }else
    {
        msg.value="this password is good";
        msgStatus.value="good";
    }

});
function changeType(){

    inputType.value= inputType.value==="text"  ? "password" :"text";
}

</script>


<template>

<input 
  :type="inputType"
  v-model="txtPassword"
  class="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-400"
  placeholder="Enter your value..."
/>

<button 
  @click="changeType"
  type="button"
  class="ml-2 p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-200 group"
>
  <svg xmlns="http://www.w3.org/2000/svg" 
       fill="none" 
       viewBox="0 0 24 24" 
       stroke-width="1.5" 
       stroke="currentColor" 
       class="w-5 h-5 text-gray-400 group-hover:text-blue-400">
    <path stroke-linecap="round" stroke-linejoin="round" 
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path stroke-linecap="round" stroke-linejoin="round" 
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
</button>
<h4 :class="{
'text-black': msgStatus==='normal',
'text-red-500': msgStatus==='small',
'text-blue-500': msgStatus==='medium',

'text-green-500': msgStatus==='good',


}">{{ msg }}</h4>


</template>