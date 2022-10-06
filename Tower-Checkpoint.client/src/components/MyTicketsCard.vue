<template>
 <div class="col-5 m-auto border"><div class="cardtitle m-2 p-1"><div>{{event.name}}</div><div>
    {{event.location}}</div>
  <div>{{event.startDate}}</div></div></div>
</template>


<script>
import { Event } from "../models/Event.js";

export default {
  props: {
  event: { type: Event, required: true}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>