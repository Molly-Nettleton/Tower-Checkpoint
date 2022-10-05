import { eventsService } from "../services/EventsService.js";
import BaseController from "../utils/BaseController.js";

export class EventsController extends BaseController {

  constructor() {
    super('api/events')
    this.router
    .get('', this.getAllEvents)
    

  }
async getAllEvents(req,res,next) {
    try {
      const events = await eventsService.getAllEvents(req.query)
      res.send(events)
      } catch (error) {
        next(error)
      }
  }
}