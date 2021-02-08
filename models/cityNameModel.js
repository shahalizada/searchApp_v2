const mongoose = require("mongoose");

const cityNameSchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
});

const townName = mongoose.model("CityName", cityNameSchema);

module.exports = townName;
