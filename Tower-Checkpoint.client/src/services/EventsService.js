import { AppState } from "../AppState.js"
import { Event } from "../models/Event.js"
import { router } from "../router.js"
import { SandboxApi } from "./AxiosService.js"

class EventsService {
  async getEvents(type = '') {
    let res 
    if (type) {
      res = await SandboxApi.get('api/events', {
        params: {
          type:type
        }
      })
    } else {
      res = await SandboxApi.get('api/events')
    }
    console.log(res.data)
    AppState.events = res.data.map(e => new Event(e))
  }
  async getEventById(eventId) {
    const res = await SandboxApi.get(`/api/events/${eventId}`)
    AppState.activeEvent = new Event(res.data)
  }
  async createEvent(eventData){
    const res = await SandboxApi.post('/api/events', eventData)
    const event = new Event(res.data)
    AppState.events = [...AppState.events, event]
    AppState.activeEvent = event
    router.push({name: 'Event', params:{ id: event.id }})
  }
  async cancelEvent(id) {
    await SandboxApi.delete(`/api/events/${id}`)
    AppState.events = AppState.events.filter(e => e.id != id)
    AppState.activeEvent = null

    router.push({name: 'Home'})
  }
  async getCommentsForEvent(eventId) {
    const res = await SandboxApi.get(`/api/event/${eventId}/comments`)
    AppState.comments = res.data
  }
  async getAttendees(eventId) {
    const res = await SandboxApi.get(`api/events/${eventId}/tickets`)
    AppState.attendees = res.data
  }
  async addAttendee(eventData) {
    const res = await SandboxApi.post(`/api/tickets`, eventData)
    const attendee = res.data
    AppState.attendees.push(attendee)
  }
  async removeAttendee(attendeeId) {
    await SandboxApi.delete('api/tickets/' + attendeeId)
    AppState.attendees = AppState.attendees.filter(a => a.id != attendeeId)
  }
}
export const eventsService = new EventsService()