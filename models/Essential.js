const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EssentialSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  order: {
    type: String
  },
  description: {
    type: String
  },
  type: {
    type: String
  },
  learn_more: {
    type: String
  },
  image_url: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Essential = mongoose.model("essential", EssentialSchema);
