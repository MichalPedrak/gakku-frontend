import { createApp, watch } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
// import store from "./store/index.js";
import { createPinia} from 'pinia'



const pinia = createPinia()

//
// watch(
//     pinia.state,
//     (state) => {
//         localStorage.setItem("auth", JSON.stringify(state.autentication));
//     },
//     { deep: true }
// );


const app = createApp(App)
app.use(pinia)
app.use(router)
// app.use(store)

app.mount('#app')
