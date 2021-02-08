const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    default: Date.now,
  },
  city: {
    type: String,
  },
  schoolName: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  score: {
    type: Number,
    required: true,
  },
  result: {
    type: String,
  },
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;
