<template>
  <div class="component">
<div class="card  text-start mb-3 d-flex elevation-5">
<div class="brdr">
        <div class=" d-flex ps-4 pt-4 justify-content-between topbar">
<div class="d-flex"><div class="pic">
        <User :creator="comment.creator"/>
      </div>
        <h5 class="p-2"><strong>{{comment.creator.name}}</strong></h5>
        <div> 
          
          <span v-if="comment.creator.isAttending">
          <i class="mdi mdi-ticket fs-5" title="Attending Event"></i> 
        </span>
        </div>
</div>
        <i @click="deletePost(comment.id)" v-if="account.id == comment.creatorId" class="btn btn-lg mdi mdi-auto-fix mx-2" alt="delete" title="delete"></i>

      </div>
        <div class="card-body">
            <div class="d-flex justify-content-center">
              <span v-if="comment.imgUrl">
            <img class="img img-fluid" :src="comment.imgUrl" alt="Title">
            </span> </div><div class="pt-3 mx-4">
          <p class="card-text p-2 button"><strong>{{comment.body}}</strong></p></div>
        </div>
        
      </div></div>

  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { commentsService } from "../services/CommentsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    comment: {
    type: Comment,
    required: true
  }
},
  setup(props){
    return {
  user: computed(() => AppState.user),
  account: computed(() => AppState.account),
  comments: computed(() => AppState.comments), 

      async removeComment(id) {
        try {
          const confirm = await Pop.confirm("Remove comment?");
          if (!confirm) {
            return;
          }
          await commentsService.removeComment(id)
      } catch (error) {
        console.error('[]',error)
        Pop.error(error)
      }
  }
  }
  }
}
</script>


<style lang="scss" scoped>

</style>