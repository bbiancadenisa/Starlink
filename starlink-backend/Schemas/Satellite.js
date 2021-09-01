const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SatelliteSchema = new Schema({

  id:{
    type: Number
  },
  name:{
      type: String,
  },

  launchDate:{
      type: String,
  },

  latitude:{
      type: Number,
  },

  longitude:{
      type: Number,
  },
});

const Satellite = mongoose.model("Satellite", SatelliteSchema);

module.exports = Satellite;