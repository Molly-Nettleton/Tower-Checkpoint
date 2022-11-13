<template>
 <div aria-label="Ticket" title="Ticket" v-if="!ticket.event?.isCanceled" class="col-5 m-auto bg-grey ticket">
  <div class="cardtitle m-2 p-1"><div>{{ticket.event?.name}}</div><div>
    {{ticket.event?.location}}</div>
  <div>{{new Date(ticket.event?.startDate).toLocaleDateString()}}</div></div></div>
</template>


<script>
export default {
  props: {
  ticket: { type: Object, required: true },

  },
  setup(){
    return {
      
    }
  }
}
</script>


<style lang="scss" scoped>
</style>