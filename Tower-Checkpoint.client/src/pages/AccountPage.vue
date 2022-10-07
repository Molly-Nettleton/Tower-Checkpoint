<template>
  <section>
<div class="pt-5 text-success">
  <h5>My Events</h5> </div>

  <div class="col-11 pt-1 d-flex flex-wrap">
    <div class="row eventrow">
    <div v-for="e in myEvents" :key="e.id" class="p-3 col-4">
    <EventCard :event="e"/></div>
    </div>
    </div>

<div class="pt-5 text-success ">
  <h5>Upcoming Events</h5> </div>
<div class="row overflow-auto">
   <div v-for="t in myTickets" :key="t.id" class="p-3 ">
    <MyTicketsCard :ticket="t" /></div>
 
</div>
  </section>
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
    async function getMyTickets() {
      try {
        await accountService.getTicketsForAccount();
        } catch (error) {
          console.error('[GetMyTickets]',error)
          Pop.error(error)
        }
    }
    onMounted(() => {
      getMyEvents();
      getMyTickets();
      })
        return {
          account: computed(() => AppState.account),
          myEvents: computed(() => AppState.myEvents.filter(e => e.creator.id == AppState.account.id)),
          myTickets: computed(() => AppState.myTickets),
          event: computed(() => AppState.events)
        };
    },
    components: { EventCard, MyTicketsCard }
}
</script>

<style scoped>

.wow{
  height: 300px
}
.eventrow{
  overflow-x: auto;
  white-space: nowrap;
  flex-wrap: nowrap;
}

</style>
