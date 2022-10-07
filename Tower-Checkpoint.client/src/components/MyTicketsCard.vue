<template>
 <div v-if="!ticket.event.isCanceled" class="col-5 m-auto border"><div class="cardtitle m-2 p-1"><div>{{ticket.name}}</div><div>
    {{ticket.location}}</div>
  <div>{{ticket.startDate}}</div></div></div>
</template>


<script>
import { Ticket } from "../models/Ticket.js";

export default {
  props: {
  ticket: { type: Ticket, required: true}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>