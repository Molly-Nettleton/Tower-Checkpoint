<template>
    <form @submit.prevent="handleSubmit">

    <div class="form-group">
    <label for="type" class="pe-2 mb-2">Type of event?</label>
      <select name="type" v-model="editable.type">
        <option value="concert">Concert</option>
        <option value="convention">Convention</option>
        <option value="sport">Esport</option>
        <option value="digital">Digital</option>
      </select></div>

      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="editable.name" placeholder="Name" required class="form-control mb-2">
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input type="text" v-model="editable.location" placeholder="Location" required class="form-control mb-2">
      </div>
      <div class="form-group">
        <label for="startDate">Date:</label>
        <input type="date" v-model="editable.startDate" placeholder="Start Date" required class="form-control mb-2">
      </div>

      <div class="form-group">
        <label for="capacity">Capacity:</label>
        <input type="number" v-model="editable.capacity" placeholder="Capacity" required class="form-control mb-2">
      </div>
      <div class="form-group">
        <label for="coverImg">Cover Image:</label>
        <input type="url" v-model="editable.coverImg" placeholder="https://img.com" class="form-control mb-2">
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea v-model="editable.description" placeholder="Description" class="form-control mb-2"
          rows="4"></textarea>
      </div>

    <div class="my-3" v-if="editable.event">
      <button class="btn btn-success" type="submit">Create Event</button>
    </div>
  </form>
</template>


<script>
import { ref } from "vue";
import { eventsService } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({
      event: {}
    })
    return {
      editable,
      async handleSubmit() {
        try {
          const formData = editable.value
          await eventsService.createEvent(formData)
          editable.value = {
            event: {}
            }
          } catch (error) {
            console.error('[Submitting Form]', error)
            Pop.error(error)
          }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>