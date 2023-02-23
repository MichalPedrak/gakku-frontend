<template>
  <Nav v-if="!(this.$route.name === 'Login' || this.$route.name === 'Register')" />
  <NavAuth v-else/>
  <main>
    <RouterView/>
  </main>
</template>


<script setup>
import Nav from "./components/Nav.vue";
import NavAuth from "./components/NavAuth.vue";
</script>


<style scoped>

</style>
