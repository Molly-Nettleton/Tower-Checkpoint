import { dbContext } from "../db/DbContext.js"
import { eventsService } from "./EventsService.js"
import { BadRequest } from "../utils/Errors.js"
import { Forbidden } from "@bcwdev/auth0provider/lib/Errors.js"

class CommentsService{
  async getCommentsById(id) {
    const comment = await dbContext.Comments.findById(id)
    return comment
  }
async removeComment(id, userInfo) {
  const comment = await this.getCommentsById(id)
   // @ts-ignore
  if (comment.creatorId.toString() != userInfo) {
    throw new Forbidden('Not your comment.')
  }
  comment.remove
  return comment
  }
  async getCommentsByEventId(eventId) {
    const comments = await dbContext.Comments.find({ eventId }).populate('creator', 'name picture')
    return comments
  }
  async createComment(commentData) {
    const event = await eventsService.getEventById(commentData.eventId)
    if (event.isCanceled) {
    throw new BadRequest('This event has been canceled.')
    }
    const comment = await dbContext.Comments.create(commentData)
    await comment.populate('creator', 'name picture')
    return comment
  }

}

export const commentsService = new CommentsService()