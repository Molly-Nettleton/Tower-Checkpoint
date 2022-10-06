import { BadRequest, Forbidden } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";
import { eventsService } from "./EventsService.js";

class TicketsService{
 async removeTicketToEvent(ticketId, userId) {
   const ticket = await dbContext.Tickets.findById(ticketId)
   const event = await eventsService.getEventById(ticket.eventId)
   const accountOwner = userId == event.creatorId.toString()
   // @ts-ignore
   const ticketOwner = ticket.accountId.toString() == userId

   if (!ticket) {
     throw new BadRequest('Invalid ticket Id.')
   }
   if (!accountOwner && !ticketOwner) {
     throw new Forbidden('You do not own a ticket to this event.')
   }
   await ticket.remove()
   // @ts-ignore
   await event.capacity++
   await event.save()
   return ticket
  }
 async addTicketToEvent(ticketData) {
   const event = await eventsService.getEventIfNotCanceled(ticketData.eventId)
   const isAttending = await this.getTicketToEvent(ticketData.eventId, ticketData.accountId)
   if (isAttending) {
     return isAttending
   }
   if (event.capacity <= 0) {
    throw new BadRequest('Event sold out.')
   }
   const ticket = await dbContext.Tickets.create(ticketData)
   // @ts-ignore
   await event.capacity--
   await event.save()
   await ticket.populate('profile', 'name picture')
   return ticket
  }
  async getTicketToEvent(eventId, accountId) {
    const ticket = await dbContext.Tickets.findOne({ eventId, accountId })
    .populate('profile', 'name picture')
      .populate('event', 'name description')
    return ticket
  }
  
  async getTicketById(id) {
    const ticket = await dbContext.Tickets.findById(id)
    return ticket
  }

  async getTicketsByEventId(eventId) {
    const tickets = await dbContext.Tickets.find({eventId}).populate('event').populate('profile', 'name picture')
    // const tickets = await dbContext.Tickets.find({ eventId }).populate('profile', 'name picture').populate('event')
   return tickets
  }

  async getTicketsByAccountId(accountId) {
    const tickets = await dbContext.Tickets.find({accountId}).populate('event').populate('profile','name picture')
  
    return tickets
  }
}
export const ticketService = new TicketsService()