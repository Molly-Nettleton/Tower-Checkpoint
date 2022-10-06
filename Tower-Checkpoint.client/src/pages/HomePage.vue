<template>
<Wordbox/>
    <section class="">
    <navbar />
   </section>
   
  <div class="row g-4 mt-3 overflow-auto eventcard">
<div class="col-4" v-for="e in events" :key="e.id">
<EventCard :event="e"/></div>
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import EventCard from "../components/EventCard.vue"
import { accountService } from "../services/AccountService.js";
import { eventsService } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";


export default {
    setup() {
        async function getEvents() {
            try {
                await eventsService.getEvents()
            }
            catch (error) {
                console.error("[]", error);
                Pop.error(error);
            }
        }

        async function getMyTickets() {
            try {
                await accountService.getEvents();
            }
            catch (error) {
                console.error("[]", error);
                Pop.error(error);
            }
        }
        onMounted(() => {
            getEvents();
        });
    return {
    events: computed(() => AppState.events)
        };
    },
    components: { EventCard }
}
</script>

<style scoped lang="scss">
.eventcard{
    max-height: 480px
}

::-webkit-scrollbar{
    display: none;
}

</style>
