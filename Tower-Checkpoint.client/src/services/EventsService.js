import { AppState } from "../AppState.js"
import { Event } from "../models/Event.js"
import { api } from "./AxiosService.js"

class EventsService {
  async getEvents() {
    const res = await api.get('api/events')

    console.log(res.data)
    AppState.events = res.data.map(e => new Event(e))
  }
}
export const eventsService = new EventsService()