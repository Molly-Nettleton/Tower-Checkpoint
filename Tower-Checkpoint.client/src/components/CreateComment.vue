<template>
  <div class="">
<form @submit.prevent="handleSubmit">

 <div class="text-start mb-2 d-flex justify-content-center">
<div class="">
  <div class="form-group text-center">
    <textarea class="p-2 w-100" rows="4" cols="150" placeholder="Tell the people.." name="postcontent"
          v-model="editable.body"></textarea>
    </div>
        </div>
      <div>
      
    </div>

  </div>
  <div class="row">
    <div class="d-flex justify-content-end">
<button class="btn btn-success" type="submit">Comment</button></div>
  </div>


  </form></div>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { commentsService } from "../services/CommentsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup(props) {
    const editable = ref({})

    return {
      editable,
      user: computed(() => AppState.account),

      async handleSubmit() {
        try {
          // const formData = editable.value
          editable.value.eventId = AppState.activeEvent.id
          await commentsService.createComment(editable.value)
          Pop.success('Comment added.')
          editable.value = {}
          } catch (error) {
            console.error('[CreateComment]',error)
            Pop.error(error)
          }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>