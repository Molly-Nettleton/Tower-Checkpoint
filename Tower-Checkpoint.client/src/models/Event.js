
export class Event{

  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.coverImg = data.coverImg
    this.location = data.location
    this.startDate = new Date(data.startDate).toLocaleDateString("en-US", {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric'
    })
    this.isCanceled = data.isCanceled
    this.type = data.type
    this.capacity = data.capacity
    this.creatorId = data.creatorId
    this.creator=data.creator
  }
}