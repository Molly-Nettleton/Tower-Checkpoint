<template>
 <div v-if="!ticket.event.isCanceled" class="col-5 m-auto bg-grey">
  <div class="cardtitle m-2 p-1"><div>{{ticket.event?.name}}</div><div>
    {{ticket.event?.location}}</div>
  <div>{{ticket.event?.startDate}}</div></div></div>
</template>


<script>
import { Event } from "../models/Event.js";
import { Ticket } from "../models/Ticket.js";

export default {
  props: {
  ticket: { type: Ticket, required: true },
  event: {type: Event, required: true}
  },
  setup(){
    return {
      
    }
  }
}
</script>


<style lang="scss" scoped>

</style>