const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const datesSchema = new Schema({
  location: {
    type: String,
    trim: true,
  },
  instructions: {
    type: String,
  },
  budget: {
    type: String,
  },
  items: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Dates = mongoose.model("Dates", datesSchema);

module.exports = Dates;
