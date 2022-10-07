import { Account } from "./Account.js"
import { Event } from "./Event.js"

export class Ticket{
  constructor(data) {
    this.id = data.id
    this.profile = new Account(data.profile)
    this.eventId = data.eventId
    this.accountId = data.accountId
    this.event = new Event(data.event)
  }
}