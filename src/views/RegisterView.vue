<template>
  <div class="d-flex justify-center align-center flex-wrap w-25">
    <form @submit.prevent="submit" class="w-100">
      <h1 class="h3 mb-3 fw-normal gap-5">Register</h1>

      <div class="form-floating p-2">
        <input v-model="data.name" type="name" class="form-control" id="floatingInput" placeholder="name">
        <label for="floatingInput">Name</label>
      </div>
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
      <button  class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
      <p class="mt-5 mb-3 text-muted">Gakku</p>
    </form>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

export default {
  name: "Register",
  setup(){

    let config = {
      headers:{
        'X-Api-Key': "JujDB6vFHNoSm0Ycpb6ofQ==5IYG5V2PC1K3lTSS",
      }
    };

    const router = useRouter();

    const submit = async () => {
      await axios
          .post('https://localhost:8000/api/auth/register', JSON.stringify(data), config)
          .then((response) => {
            alert(1)
          })

      await router.push('/login')
    }

    const data = reactive({
      name: '',
      email: '',
      password: '',
    })
    return {
      submit,
      data
    }
  }
}
</script>
