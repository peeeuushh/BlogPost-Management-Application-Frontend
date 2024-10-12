<script setup>
import Comment from './blogpost/comment.vue';
import Homepage from './blogpost/homepage.vue';
import Login from './blogpost/login.vue';
import Signup from './blogpost/signup.vue';
//import Signup from './blogpost/signup.vue';
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->

<!-- <router-link></router-link> -->
  
  <router-view/>
 
 
  <!-- <Homepage/>
  <Comment/> -->
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
