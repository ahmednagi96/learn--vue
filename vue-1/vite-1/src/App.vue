<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import TheWelcome from '@/components/TheWelcome.vue'
    setTimeout(() => {
      msg="done II";
    },2000);
    let msg= $ref("welcome back");
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
     <!--  <HelloWorld msg="You did it!" />-->
       <hello-world msg="You did it!"/>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/contact">Contact us</RouterLink>

<!--       
  <main>
    <RouterLink to="/about">{{ msg }}</RouterLink><br>
    <input type="text" v-model="msg">
  </main>
-->
  <main>
    <RouterView />
  </main>
</template>

