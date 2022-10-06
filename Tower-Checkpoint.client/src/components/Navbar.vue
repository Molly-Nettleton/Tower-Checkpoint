<template>
 <div class="row justify-content-between bg-success rounded pb-3 p-2 g-2">
  <div class="col text-center selectable rounded p-1"><h5>All</h5></div>
  <div class="col text-center selectable rounded p-1"><h5>Expos</h5></div>
  <div class="col text-center selectable rounded p-1"><h5>Conventions</h5></div>
  <div class="col text-center selectable rounded p-1"><h5>Exhibits</h5></div>
  <div class="col text-center selectable rounded p-1"><h5>ESports</h5></div>
  <div class="col text-center selectable rounded p-1"><h5>Digital</h5></div>
  <div class="col text-center selectable rounded p-1"><h5>Concerts</h5></div>
  


</div>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
