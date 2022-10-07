import { AppState } from "../AppState.js"
import { Event } from "../models/Event.js"
import { Ticket } from "../models/Ticket.js"
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
    AppState.events = [event, ...AppState.events]
    AppState.activeEvent = event
    router.push({name: 'Event', params:{ id: event.id }})
  }
  async cancelEvent(id) {
    await SandboxApi.delete(`/api/events/${id}`)
    AppState.events = AppState.events.filter(e => e.id != id)
    AppState.activeEvent.isCanceled = true
    router.push({name: 'Home'})
    // router.push({name: 'Home'})
  }
  async getCommentsForEvent(eventId) {
    const res = await SandboxApi.get(`/api/event/${eventId}/comments`)
    AppState.comments = res.data
  }
  async getTicket(eventData) {
    const res = await SandboxApi.post('api/tickets', eventData)
    const ticket = res.data
    AppState.tickets.push(ticket)
    AppState.events = res.data
    AppState.activeEvent.capacity--
  }
  async getAttendees(eventId) {
    const res = await SandboxApi.get(`api/events/${eventId}/tickets`)
    console.log(res.data)
    
    AppState.tickets = res.data.map(e => new Ticket(e))
  }
  async removeAttendee(id) {
    await SandboxApi.delete(`api/tickets/${id}`)
    AppState.tickets = AppState.tickets.filter(a => a.id != id)
    AppState.activeEvent.capacity++
  }
}
export const eventsService = new EventsService()