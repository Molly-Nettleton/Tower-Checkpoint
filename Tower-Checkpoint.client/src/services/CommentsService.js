import { AppState } from "../AppState.js"
import { SandboxApi } from "./AxiosService.js"

class CommentsService {

  async getComments(eventId) {
    const res = await SandboxApi.get(`api/events/${eventId}/comments`)
    console.log(res.data)
    AppState.comments = res.data
}
  async createComment(formData) {
    const res = await SandboxApi.post('api/comments', formData)
    AppState.comments.push(new Comment(res.data))
  }
  async removeComment(id) {
    const res = await SandboxApi.delete(`api/comments/${id}`)
    AppState.comments = AppState.comments.filter(c => c.id != id)
  }
}
export const commentsService = new CommentsService()