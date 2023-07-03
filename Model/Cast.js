const mongoose = require("mongoose");

const castSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  accountnumber: {
    type: Number,
    required: true,
  },
  ifsc: {
    type: String,
    requied: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  credited: {
    type: Boolean,
    default: false,
  },
});

const Cast = mongoose.model("Cast", castSchema);
