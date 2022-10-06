<template>
  <div class="eventcard" :style="{backgroundImage: `url(${event.coverImg})`}">
    <br><br><br><br><br>
    <div class="cardtitle p-3"><h5>{{event.name}}</h5><div>
    {{event.location}}</div>
  <div>{{event.startDate}}</div></div>
  
  </div>
</template>


<script>

export default {
  props: {
    event: { type: Object, required: true }
  },
  setup(){
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
.eventcard {
  border: solid rgb(163, 13, 244);
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