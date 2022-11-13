import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "@bcwdev/auth0provider/lib/Errors.js"

class EventsService {
async editEvent(body, userInfo, eventId) {
const event = await this.getEventIfNotCanceled(eventId)


   // @ts-ignore
  if (userInfo.id != event.creatorId.toString()) {
    throw new BadRequest('Not your event.')
  }
  // @ts-ignore
  if (!event) {
    throw new BadRequest('Event has been canceled.')
  }
  // @ts-ignore
  event.name = body.name || event.name
  // @ts-ignore
  event.description = body.description || event.description
  // @ts-ignore
  await event.save()
  return event
  }
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
      // isCanceled: false,
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

 
  async getEventIfNotCanceled(id) {
    const event = await this.getEventById(id)
    if (event.isCanceled) {
      throw new BadRequest('Event Canceled')
    }
    return event
 }
}

export const eventsService = new EventsService()