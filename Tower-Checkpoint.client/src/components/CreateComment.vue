<template>
  <div class="">
<form @submit.prevent="handleSubmit">

 <div class="text-start mb-2 d-flex">
<div class="">
  <div class="form-group text-center">
    <textarea class="p-2" rows="4" cols="87" placeholder="Tell the people.." name="postcontent"
          v-model="editable.body"></textarea>
    </div>
        </div>
      <div>
      
    </div>

  </div>
<button class="btn btn-success" type="submit">Comment</button>

  </form></div>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { commentsService } from "../services/CommentsService.js";

export default {
  setup(props) {
    const editable = ref({})

    return {
      editable,
      user: computed(() => AppState.account),

      async handleSubmit() {
        try {
          const formData = editable.value
          await commentsService.createComment(formData)
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