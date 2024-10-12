import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import{ createRouter, createWebHistory} from 'vue-router'
import login from './blogpost/login.vue'
import signup from './blogpost/signup.vue'

const routes=[
    {path:"/",name:"login",component:login},
    {path:"/signup",name:"signup",component:signup}
    // {path:"/contact",name:"Contact",component:Contact},
    // // {path:"/employee",name:"Employee",component:Employees}
    // {path:"/employee",name:"Employee",component:()=> import('./views/Employee.vue')},
    // {
    //     path:"/employees/:id",
    //     name:"Employees",
    //     props:true,
    //     component:Employees
    // }
]

const router= createRouter({
    history: createWebHistory(),
    routes
})


// const store= createPinia()


createApp(App).use(router).mount('#app')




