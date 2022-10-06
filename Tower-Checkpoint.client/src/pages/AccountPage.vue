<template>
<div class="pt-5 text-success">
  <h5>Upcoming Events</h5> </div>
  <div class="col-6 pt-1">
    <div class="eventcard col-5 rounded" :style="{backgroundImage: `url(https://thiscatdoesnotexist.com/)`}">
    <br><br><br><br><br>
    
    <div class="cardtitle m-2 p-1">
      <div>name</div>
      <div>location</div>
      <div>startDate</div>
    </div>
  
  </div>
  </div>


<div class="pt-5 text-success">
  <h5>Upcoming Events</h5> </div>
<div class="row">
  <div class="col-5 m-auto border"><div class="cardtitle m-2 p-1"><div>name</div><div>
    location</div>
  <div>startDate</div></div></div>

</div>


  <!-- <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div> -->
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
.eventcard {
  border: solid 5px #474C61;
  background-size: 100%;
  background-repeat: no-repeat;
}
  .cardtitle{
    backdrop-filter: blur(10px);
  }

  img {
    max-height: 154px;
    max-width: 100%;
    object-fit: cover;
  }
</style>
