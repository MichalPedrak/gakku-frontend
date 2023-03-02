<template>
  <h1>{{ message }}</h1>
</template>


<script>
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {useAuthStore} from "../store/index.js";


export default {
  name: "Home",

  setup: function () {

    const message = ref('You are not logged in!')
    const store = useAuthStore()
    const auth = reactive(JSON.parse(store.user))
    const router = useRouter();


    message.value = `Dzień dobry ${auth.name}, to twój główny panel :)`


    return {
      auth,
      message,
    }
  },
}
</script>


