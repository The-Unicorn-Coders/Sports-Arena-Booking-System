const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema(
  {
    arenaName: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const OpeningTime = mongoose.model('OpeningTime', openingTimeSchema);

module.exports = OpeningTime;
