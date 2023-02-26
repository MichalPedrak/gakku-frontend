<template>
  <nav class="vh-100 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
    <a href="/" class="w-100 d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr>
    <ul class="w-100 nav nav-pills flex-column mb-auto text-start">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
          Customers
        </a>
      </li>
      <li @click="logout">
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
          Logout
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </ul>
    </div>
  </nav>

</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "Nav",
  setup(){
    const store = useStore();
    const auth = computed(() => store.state.authenticated)
    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        })
        // await router.push('/');
      };



    return{
      auth,
      logout
    }
  }
}
</script>

<style scoped>
  nav{
    display: flex;
    align-items: flex-start;
  }
</style>
