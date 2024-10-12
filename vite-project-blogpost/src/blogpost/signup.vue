<script setup>
import { ref } from 'vue';
import axios from 'axios';

const SignupCredentials=ref({
    User:{
    Name : "",

    Username : "",

    Email : "",

    Password : ""
    }
}
)
function addUser(){
    axios.post("http://localhost:8080/user/createUser", SignupCredentials.value.User)
    .then(response => {
        alert("user created")
    }).catch(error =>{
        console.log(error)
    })

     
    }


// onMounted(()=>{
//     addUser()
// })


</script>



<template>

    <div class="signup-container">
        <u><h1>BLOG APPLICATION</h1></u>
        <u><h2>SIGN UP PAGE</h2></u>
        <form id="signup-form" @submit="addUser()">
            <label for="firstName">Name : </label>
            <input type="text" id="Name" name="Name : " placeholder="Enter your Full Name" v-model="SignupCredentials.Name" required><br><br>

            
            <label for="username">Username : </label>
            <input type="text" id="username" name="Username : " placeholder="Enter your username" v-model="SignupCredentials.Username" required><br><br>

            <label for="email">Email Id : </label>
            <input type="email" id="email" name="Email Id : " placeholder="Enter your email" v-model="SignupCredentials.Email" required><br><br>

            <label for="password">Password : </label>
            <input type="password" id="password" name="Password : " v-model="SignupCredentials.Password" required><br><br>

            <button type="submit">Register</button><br><br>
        </form>
    </div>

</template>