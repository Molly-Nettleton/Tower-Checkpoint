import mongoose from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";
const Schema = mongoose.Schema

export const EventSchema = new Schema({
  creatorId: { type: ObjectId, required: true, ref: "Account"},
  name: { type: String, required: true, minlength: 1, maxLength: 100 },
  description: { type: String, required: true, minlength: 1, },
  coverImg: { type: String, required: true, },
  location: { type: String, required: true, minlength: 1, maxLength: 200 },
  capacity: { type: Number, required: true, },
  startDate: { type: Date, required: true, },
  isCanceled: { type: Boolean, default: false },
  type: { type: String, enum: ['concert', 'convention', 'sport', 'digital'], required: true, }
}, SCHEMA_OPTIONS)


EventSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

// NOTE comparable to ALBUM in postit