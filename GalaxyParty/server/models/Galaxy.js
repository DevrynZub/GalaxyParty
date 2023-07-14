import { Schema } from "mongoose";




export const GalaxySchema = new Schema({

  name: { type: String, required: true, maxlength: 50 },
  stars: { type: Number, require: true, max: 100000 },

}, { timestamps: true, toJSON: { virtuals: true } })