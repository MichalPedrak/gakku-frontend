<template>
  <h1>{{ message }}</h1>
</template>


<script>
import {computed, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {useAuthStore} from "../store/index.js";


export default {
  name: "Home",

  setup(){

    const message = ref('You are not logged in!')
    const store = useAuthStore()
    const auth = store.user
    const router = useRouter();

    // if(!computed(() => store.state.authenticated)) return router.push('/login');

    onMounted(async () => {


      // message.value = `Dzień dobry ${auth.name}, ${auth.email}`

    });
    return{
      message,
    }
  },
}
</script>


