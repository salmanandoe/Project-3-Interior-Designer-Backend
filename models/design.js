///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const designSchema = new mongoose.Schema({
  name: String,
  imageURL: String,

},{timestamps: true});

const Design = mongoose.model("Design", designSchema);

module.exports = Design
