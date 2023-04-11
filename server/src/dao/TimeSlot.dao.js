const TimeSlot = require("./models/timeSlots.models")

class TimeSlotManager {
    async timeBooking(date, time) {
        try {
            const newBooking = await TimeSlot.create({ date, time });
            return "Time Slot booked succesfully";
        }
        catch (error) {
            return error;
        }
    }

    async deleteAll() {
        await TimeSlot.deleteMany()
        return "All bookings deleted"
    }
}

module.exports = { TimeSlotManager };
