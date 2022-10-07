import { Account } from "./Account.js";

export class Comment{
  constructor(data) {
    this.creator = new Account(data.creator)
    this.creatorId = data.creatorId
    this.event = new Event(data.event)
    this.eventId = data.eventId
    this.body = data.body
    this.isAttending = data.isAttending || false
  }
}