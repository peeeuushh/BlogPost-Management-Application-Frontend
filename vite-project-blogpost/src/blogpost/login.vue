<script setup>
import { ref,onMounted} from 'vue';
import axios from 'axios';
import Signup from './signup.vue';
import login from './login.vue';
const LoginCredentials=ref({
    Username:"",

    Password:""

}
)

// function fetchblogs(){
//     axios.get ("http://localhost:8080/blogpost/getAllPosts")

//      .then(Response =>{

//        blogs.value=Response.data;

//     }).catch(error=>{
//         console.log(error)

//     })

// }
// onMounted(()=>{
//     fetchblogs()
// })
   

</script>


<template>
    



    <div class="login-container">
        <u><h1>BLOG APPLICATION</h1></u>
        <u><h2>Welcome to Blog</h2><br></u>
        <form id="login-form">
            <label for="username">Username : </label>
            <input type="text" id="username" name="username" placeholder="Enter your username" v-model="LoginCredentials.Username" ><br><br>

            <label for="password">Password : </label>
            <input type="password" id="password" name="password" placeholder="Enter your password" v-model="LoginCredentials.Password" ><br><br>

            <label for="remember">Remember me</label>
            <input type="checkbox" id="remember" name="remember"><br><br>

            <button v-on:click="change_status" >Log In</button>
            <router-link custom v-slot = "{ navigate }" :to="{name:'signup'}">
            <button v-on:click="navigate" role="link" >Sign Up</button>
            </router-link>
            
        </form>
        
    </div>
   <!-- <router-view></router-view> -->
   <!-- <Signup/> -->
</template>
