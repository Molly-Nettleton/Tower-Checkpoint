<template>
 <section class="container elevation-5 me-5 d-flex bg-grey pe-3">
  <div class="col-4 p-2 m-1 me-4">
      <img class="eventimg img-fluid elevation-5" :src="event.coverImg" :alt="event.name" :title="event.name">
  </div>
    
    <div class="col-7 pt-4 ms-3">
      <div class="d-flex justify-content-between">
    <div><h4>{{event.name}}</h4>{{event.location}}</div>
    <div><h5>{{event.startDate}}</h5>
    <p>time of event</p></div>
    </div>
    <div>
      
    </div>
    <p>{{event.description}}</p>
    <div class="d-flex flex-end justify-content-between"><div>Capacity: {{event.capacity}}</div> <div><button class="btn btn-warning">Attend</button></div></div>
      </div>
</section>
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