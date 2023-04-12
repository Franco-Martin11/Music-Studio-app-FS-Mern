const mongoose = require('mongoose')

const timeSlotsCollection = 'timeSlot'

const timeSlotSchema = new mongoose.Schema({
    date: {
      type: String,
      require: true,
      unique: true
    },
    time: {
      type: String,
      require: true,
      unique: true
    }
  });

const TimeSlot = mongoose.model(timeSlotsCollection, timeSlotSchema)

module.exports = TimeSlot