<template>
  <div class="container pt-3">
  <div class="me-3" v-if="event">
<EventDetail :event="event"/>
</div>
  </div>


 <div class="container pt-5">
  <h5>See who is attending this event.</h5>
  <div class="p-2 bg-dark me-3 attendees">
    <img v-for="t in tickets" class="pic elevation-5 rounded-circle me-2" :src="t.profile?.picture" :title="t.profile?.name" alt=""> 
  </div>
</div>
<br>
<section class="d-flex justify-content-center">  
  <div class="col-8">
  <div class="ms-2 mb-2 text-text">What people are saying..</div>
  <div class="container bg-dark p-4">
  <div class="text-success text-end pb-1">Join the convseration</div>
  <CreateComment/> <br>

<div class="" v-for="c in comments" :key="c">
        <CommentCard :comment="c" :account="c.creator"/>
        </div>
</div></div>
</section>
</template>

<script>
import { computed } from "@vue/reactivity"
import { onMounted } from "vue"
import { AppState } from "../AppState.js"
import { commentsService } from "../services/CommentsService.js"
import Pop from "../utils/Pop.js"
import CommentCard from "../components/CommentCard.vue"
import CreateComment from "../components/CreateComment.vue"
import { useRoute } from "vue-router"
import { eventsService } from "../services/EventsService.js"
import EventCard from "../components/EventCard.vue"
import EventDetail from "../components/EventDetail.vue"

export default {
  setup() {
    const route = useRoute()

    async function getEventById() {
      try {
        await eventsService.getEventById(route.params.id);
        } catch (error) {
          console.error('[GetEventById]',error)
          Pop.error(error)
        }
    }
    async function getComments() {
            try {
                await commentsService.getComments(route.params.id);
            }
            catch (error) {
                console.error("[GetComments]", error);
                Pop.error(error);
            }
    }
    async function getAttendeesByEventId() {
      try {
          await eventsService.getAttendees(route.params.id)
        } catch (error) {
          console.error('[GetAttendees]',error)
          Pop.error(error)
        }
    }
        
    onMounted(() => {
      getEventById();
      getComments();
      getAttendeesByEventId();
        });
    return {
          event: computed(() => AppState.activeEvent),
          account: computed(() => AppState.account),
          comments: computed(() => AppState.comments),
          user: computed(() => AppState.user),
          attendees: computed(() => AppState.attendees),
          isAttendee: computed(() => AppState.attendees.find(a => a.accountId == AppState.account.id)),
          tickets: computed(() => AppState.tickets),
          profiles: computed(() => AppState.profiles),

      // async addTicket() {
      //       try {
      //         if (!AppState.account.id) {
      //           return AuthService.loginWithRedirect()
      //         }
      //         await eventsService.addAttendee({
      //           eventId: AppState.activeEvent.id || route.params.id
      //         })
      //           Pop.success('Ticket to event added!')
      //         } catch (error) {
      //           console.error('[AddAttendee]',error)
      //           Pop.error(error)
      //         }
      // },
      // async removeAttendee() {
      //       try {
      //         const yes = await Pop.confirm('Are you sure you do not want to attend this event?')
      //         if (!yes) { return }
      //         const attendee = AppState.attendees.find(a => a.accountId == AppState.account.id && a.albumId == AppState.activeEvent.id)
      //         await eventsService.removeAttendee(attendee.id)
      //           Pop.success('Ticket removed.')
      //         } catch (error) {
      //           console.error('[RemoveAttendee]',error)
      //           Pop.error(error)
      //         }
      //     }
        };
    },
    components: { CommentCard, CreateComment, EventCard, EventDetail }
}
</script>


<style lang="scss" scoped>
  .pic{
height: 50px;
widows: 50px;
}

.attendees{
  height:70px;
}

</style>