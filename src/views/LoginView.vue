<template>

    <div class="d-flex justify-center align-center flex-wrap w-25">
      <form class="w-100">
        <h1 class="h3 mb-3 fw-normal">Login in</h1>

        <div class="form-floating p-2">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating p-2">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
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

  export default {
    name: "Login",
  setup(){

  let config = {
  headers:{
  'X-Api-Key': "JujDB6vFHNoSm0Ycpb6ofQ==5IYG5V2PC1K3lTSS",
}
};

  const router = useRouter();

  const submit = async () => {
  await axios
  .post('https://localhost:8000/api/auth/login', JSON.stringify(data), config)
  .then((response) => {
   alert(1)
})

  await router.push('/')
}

  const data = reactive({
  name: '',
  password: '',
})
  return {
  submit,
  data
}
}
}
</script>
