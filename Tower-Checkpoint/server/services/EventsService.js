import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "@bcwdev/auth0provider/lib/Errors.js"

class EventsService {
async cancelEvent(id, userInfo) {
  const event = await this.getEventById(id)
  
   // @ts-ignore
  if (event.creatorId.toString() != userInfo.id) {
    throw new Forbidden('Not your event.')
  }

  event.isCanceled = true
  await event.save()
  return event
  }

  async createEvent(eventId) {
    const event = await dbContext.Events.create(eventId)
    await event.populate('creator', 'name picture')
    return event
  }
  async getAllEvents(query) {
    const events = await dbContext.Events.find({
      isCanceled: false,
      ...query,
    }).populate('creator','name picture')
  return events
  }
  async getEventById(id) {
    const event = await dbContext.Events.findById(id).populate('creator', 'name picture')

    if (!event) {
      // @ts-ignore
      throw new BadRequest('Invalid or Bad Event Id')
    }
    return event
  }
}

export const eventsService = new EventsService()