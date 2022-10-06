<template>
<div class="pt-5 text-success">
  <h5>My Events</h5> </div>
  <div class="col-11 pt-1 d-flex flex-wrap">

    <div class="row events">
    <div v-for="e in myEvents" :key="e.id" class="p-3 col-4">
    <EventCard :event="e"/></div></div>
    </div>

<div class="pt-5 text-success">
  <h5>Upcoming Events</h5> </div>
<div class="row">
 <!-- <MyTicketsCard /> -->
</div>

  <!-- <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div> -->
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import EventCard from "../components/EventCard.vue";
import { accountService } from "../services/AccountService.js";
import Pop from "../utils/Pop.js";
import MyTicketsCard from "../components/MyTicketsCard.vue";

export default {
    setup() {
    async function getMyEvents() {
        try {
          await accountService.getEventsForAccount();
          } catch (error) {
            console.error('[GetMyEvents]',error)
            Pop.error(error)
          }
    }
    onMounted(() => {
      getMyEvents();
      })
        return {
            account: computed(() => AppState.account),
          myEvents: computed(() => AppState.myEvents),
            // events: computed(() => AppState.events)
        };
    },
    components: { EventCard, MyTicketsCard }
}
</script>

<style scoped>
.events{
  overflow-x: auto;
  white-space: nowrap;
  flex-wrap: nowrap;
}
*::-webkit-scrollbar {
  width: 13px;
  width: 13px;
}
*::-webkit-scrollbar-track {
  border-radius: 7px;
  background-color: #474C61;
 cursor: pointer;
}

/* *::-webkit-scrollbar-track:hover {
  background-color: #8ddcf0;
  cursor: pointer;
}

*::-webkit-scrollbar-track:active {
  background-color: #d1eaf0;
} */

*::-webkit-scrollbar-thumb {
  width: 100px;
  border-radius: 10px;
  background-color: #79E7AB;
}
</style>
