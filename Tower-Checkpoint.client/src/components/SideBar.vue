<template>
<div class="d-flex flex-wrap justify-content-center">
  <Login/>
  <button class="btn btn-primary mt-3">Home</button>
  <button class="btn btn-success mt-3">Account</button>
  <button class="btn btn-success mt-3">New Event</button>
  <button class="btn btn-danger mt-3">Logout</button>
  </div>
</template>


<script>
import Login from "./Login.vue";
export default {
    setup() {
        return {};
    },
    components: { Login }
}
</script>


<style lang="scss" scoped>
  .btn{
  font-size: small;
  }

</style>