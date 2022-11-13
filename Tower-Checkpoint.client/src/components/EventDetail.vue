<template>
  <section class="container elevation-5 d-flex bg-grey ">
    <div class="col-4 p-2 m-1">
      <img class="elevation-5 img" :src="event.coverImg" :alt="event.name" :title="event.name">
    </div>

    <div class="col-7 pt-4">
      <div class="d-flex justify-content-between">
        <div>
          <h4>{{ event.name }}</h4>
          <h5>{{ event.location }}</h5>
        </div>
        <div>
          <h5>{{ event.startDate }}</h5>
        </div>
      </div>
      <div>

      </div>
      <p>{{ event.description }}</p>
      <div class="text-center">
        <div class="d-flex flex-end justify-content-between">
          <div v-if="event.capacity > 0">{{ event.capacity }} tickets remaining.</div>
          <div v-else>Sold Out!</div>
          <div>

            <button aria-label="Get Ticket" title="Get Ticket" class="btn btn-warning" @click="addTicket()"
              :disable="event.capacity == 0" v-if="!isAttending">Get Ticket</button>

            <button aria-label="Remove Ticket" title="Remove Ticket" class="btn btn-warning" @click="removeTicket()"
              v-else>Remove Ticket</button>

            <p><button class="btn btn-danger m-2" aria-label="Cancel Event" title="Cancel Event" v-if="account.id == event.creatorId" @click="cancelEvent()">Cancel Event</button></p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { Event } from "../models/Event.js";
import { AuthService } from "../services/AuthService.js";
import { eventsService } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    event: { type: Event, required: true },
  },
  setup() {
    const route = useRoute()
    return {
      account: computed(() => AppState.account),
      isAttending: computed(() => AppState.tickets.find(t => t.accountId == AppState.account.id)),
      async cancelEvent() {
        try {
          const yes = await Pop.confirm('Cancel event?')
          if (!yes) { return }
          await eventsService.cancelEvent(AppState.activeEvent.id)
        } catch (error) {
          console.error('[CancelEvent]', error)
          Pop.error(error)
        }
      },

      async addTicket() {
        try {
          if (!AppState.account.id) {
            return AuthService.loginWithPopup()
          }
          await eventsService.getTicket({ eventId: AppState.activeEvent.id || route.params.id })
        } catch (error) {
          console.error('[AddTicket]', error)
          Pop.error(error)
        }
      },

      async removeTicket() {
        try {
          const yes = await Pop.confirm('Revoke attendance?')
          if (!yes) { return }

          let ticket = AppState.tickets.find(t => t.profile.id == AppState.account.id)

          await eventsService.removeAttendee(ticket.id)
        } catch (error) {
          console.error('[RemoveTicket]', error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 300px;
  width: 270px;
  object-fit: cover;
  object-position: center;
}
</style>