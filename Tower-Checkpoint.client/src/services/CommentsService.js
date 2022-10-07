import { AppState } from "../AppState.js"
import { SandboxApi } from "./AxiosService.js"

class CommentsService {

  async getComments(eventId) {
    const res = await SandboxApi.get(`api/events/${eventId}/comments`)
    console.log(res.data)
    AppState.comments = res.data
}
  async createComment(formData) {
    console.log(formData);
    const res = await SandboxApi.post('api/comments', formData)
  const comment = res.data
    // NOTE adds comment without refresh v
    AppState.comments = [comment, ...AppState.comments]
  }
  async removeComment(id) {
    const res = await SandboxApi.delete(`api/comments/${id}`)
    let leftovers= AppState.comments.filter(c => c.id != id)
    AppState.comments = leftovers
  }
}
export const commentsService = new CommentsService()