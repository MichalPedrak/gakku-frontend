<template>

    <div class="d-flex justify-center align-center flex-wrap w-25">
      <form @submit.prevent="submit" class="w-100">
        <h1 class="h3 mb-3 fw-normal">Login in</h1>

        <div class="form-floating p-2">
          <input v-model="data.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating p-2">
          <input v-model="data.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
        <p class="mt-5 mb-3 text-muted">Gakku</p>
      </form>
    </div>

</template>
<script>

  import {reactive} from "vue";
  import axios from "axios";
  import {useRouter} from "vue-router";
  import { useAuthStore } from '../store/index.js'

  export default {
    name: "Login",

  setup() {
    const data = reactive({
      email: '',
      password: '',
    })

    // let config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // credentials: 'include',
    //
    // };

    const router = useRouter();
    const store = useAuthStore()
//     const submit = async () => {
//     axios.defaults.withCredentials = true;
//     await axios
//     .post('https://localhost:8000/api/login', JSON.stringify(data), config )
//     .then((response) => {
//     })
//
//   await router.push('/')
// }

    const submit = async () => {
      try{
          await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify(data)
        })

        const response = await fetch('http://localhost:8000/api/user', {
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        });
        // console.log(await response.json())
        store.login(await response.json());

        await router.push('/');

      } catch (e){
        console.log(e)
      }
    };


      return {
        submit,
        data
      }
    }

  }
</script>
