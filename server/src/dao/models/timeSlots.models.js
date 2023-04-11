const mongoose = require('mongoose')

const timeSlotsCollection = 'timeSlot'

const timeSlotSchema = new mongoose.Schema({
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  });

const TimeSlot = mongoose.model(timeSlotsCollection, timeSlotSchema)

module.exports = TimeSlot