<template>
  <main>
<div class="d-flex flex-wrap justify-content-center">
      <router-link :to="{name: 'Home'}">
        <button class="btn btn-primary mt-3">Home</button>
    </router-link>
    <router-link :to="{name: 'Account'}">
      <button class="btn btn-success mt-3">Account</button>
    </router-link>

        <button class="btn btn-success mt-3" data-bs-target="#eventsCanvas" data-bs-toggle="offcanvas">
            Add Event
        </button>
    <Login/>
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
  // .btn{
  // // font-size: small;
  // }

</style>