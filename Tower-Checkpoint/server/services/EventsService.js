import { dbContext } from "../db/DbContext.js";

class EventsService {
  async getAllEvents(query) {
    const events = await dbContext.Events.find({
      isCanceled: false,
      query,
    }).populate('creator','name picture')
  return events
}
}

export const eventsService = new EventsService()