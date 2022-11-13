<template>
   <router-link :to="{name: 'Event', params:{ id: event.id}}">
  <div aria-label="Event" title="Event" class="eventcard rounded" :style="{backgroundImage: `url(${event.coverImg})`}">
    <br><br><br><br><br>
    <div class="cardtitle p-1 text-shadow "><h5 class="title">{{event.name}}</h5><div>
    {{event.location}}</div>
  <div>{{new Date(event.startDate).toLocaleDateString()}}</div></div>
  </div>
  </router-link>
</template>


<script>

export default {
  props: {
    event: { type: Object, required: true },
  },
  setup(){
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
.eventcard {
  border: solid 5px #474C61;
  background-size: 100%;
  // background-position: top;
  // // background-attachment: fixed;
  background-repeat: no-repeat;
}
  .cardtitle{
    background-color: rgba(240, 248, 255, 0.226);
    backdrop-filter: blur(10px);
    color:#ffffff;
  }

  img {
    max-height: 154px;
    max-width: 100%;
    object-fit: cover;
  }

</style>