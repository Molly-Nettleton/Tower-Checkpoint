import { Account } from "./Account.js"

export class Event{

  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.coverImg = data.coverImg
    this.location = data.location
    this.startDate = data.startDate
    this.isCanceled = data.isCanceled
    this.type = data.type
    this.capacity = data.capacity
    this.creator = new Account(data.creator)
  }
}