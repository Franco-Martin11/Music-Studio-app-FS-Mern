const { DateTime } = require("luxon");
const TimeSlot = require("./models/timeSlots.models");

class TimeSlotManager {
  async timeBooking(date, time) {
    try {
      const newBooking = await TimeSlot.create({ date, time });
      return "Time Slot booked successfully";
    } catch (error) {
      return error;
    }
  }

  async getWeeklySlots(startDate, endDate) {
    const availableSlots = {};
  
    for (let date = DateTime.fromISO(startDate); date <= DateTime.fromISO(endDate); date = date.plus({ days: 1 })) {
      const dateFormatted = date.toISODate();
      const slots = await TimeSlot.find({ date: dateFormatted });
      availableSlots[dateFormatted] = slots;
    }
    
    return availableSlots;
  }
  
  async deleteAll() {
    await TimeSlot.deleteMany();
    return "All bookings deleted";
  }
}

module.exports = { TimeSlotManager };

