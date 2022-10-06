<template>
  <div class="component">
<div class="card mb-3 d-flex elevation-5">
<div class="brdr">
        <div class="text-dark d-flex justify-content-between ">
<div class="d-flex">
        <User :creator="comment.creator"/>
        <h5 class="p-2"><strong>{{comment.creator.name}}</strong></h5>
        <div> 
          <span v-if="comment.creator.isAttending">
          <i class="mdi mdi-ticket fs-5" title="Attending Event"></i> 
        </span>
        </div>
</div>
        <i @click="deletePost(comment.id)" v-if="account.id == comment.creatorId" class="btn btn-lg mdi mdi-auto-fix mx-2" alt="delete" title="delete"></i>
      </div>
        <div class="card-body text-dark">
          <p class="card-text"><strong>{{comment.body}}</strong></p>
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