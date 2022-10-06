import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
export const TicketSchema = new Schema({
  eventId: { type: ObjectId, required: true, ref: "Event"},
  accountId: { type: ObjectId, required: true, ref: "Account"},
}, {timestamps:true, toJSON:{virtuals:true}})

TicketSchema.index({eventId: 1, accountId: 1 }, {unique: true})


TicketSchema.virtual('profile', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

TicketSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  justOne: true,
  ref: 'Event'
})

// NOTE COMPARABLE TO ALBUM MEMBER IN POSTIT