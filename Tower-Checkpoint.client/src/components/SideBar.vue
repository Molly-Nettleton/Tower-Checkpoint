<template>
  <main class="sidebar">
    <div class="d-flex flex-wrap justify-content-center">
      <router-link :to="{ name: 'Home' }">
        <button class="btn button-9 fw-bold btn-success hover elevation-5" aria-label="Home" title="Home">Home</button>
      </router-link>

      <router-link :to="{ name: 'Account' }">
        <button class="btn button-9 btn-success fw-bold hover" aria-label="Account" title="Account">Account</button>
      </router-link>

      <button class="btn button-9 fw-bold btn-success hover elevation-5" data-bs-target="#eventsCanvas"
        data-bs-toggle="offcanvas" aria-label="Add Event" title="Add Event">
        Add Event
      </button>
      <div aria-label="Logout" title="Logout" class="pt-1 ">
        <Login />
      </div>
    </div>
  </main>
</template>


<script>
import Login from "./Login.vue";
import CreateEvent from "./CreateEvent.vue";
export default {
  setup() {
    return {};
  },
  components: { Login, CreateEvent }
}
</script>


<style lang="scss" scoped>
.btn {
  font-size: small;
}

.sidebar {
  height: 100vh;
}
</style>