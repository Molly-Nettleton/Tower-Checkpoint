<template>
<section class="container">
    <div class="col-12 bg-grey">
      <div class="d-flex justify-content-around my-3">
        <button @click="filterEvent('')" class="btn selectable text-light darken-90">All</button>
        <button @click="filterEvent('concert')" class="btn selectable text-light darken-90">Concerts</button>
        <button @click="filterEvent('convention')" class="btn selectable text-light">Conventions</button>
        <button @click="filterEvent('sport')" class="btn selectable text-light darken-90">Esports</button>
        <button @click="filterEvent('digital')" class="btn selectable text-light darken-90">Digitals</button>
      </div>
    </div>
  </section>
</template>

<script>
import { eventsService } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";
import Login from './Login.vue'
export default {
  setup() {
    return {
      async filterEvent(type){
        try {
          await eventsService.getEvents(type)
        } catch (error) {
          Pop.error(error,'[FilterEvents]')
        }
      }
    }
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
