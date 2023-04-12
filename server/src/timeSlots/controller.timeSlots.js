const { Router } = require("express");
const {DateTime} = require('luxon')
const { TimeSlotManager } = require("../dao/TimeSlot.dao");

const router = Router();
const timeSlotManager = new TimeSlotManager()

router.post("/", async (req, res) => {
  try {
    const { date, time } = req.body
    const timeSlotCreated = await timeSlotManager.timeBooking(date, time);
    res.json({ message: timeSlotCreated });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const startOfWeek = DateTime.now().startOf("week");
    const endOfWeek = DateTime.now().endOf("week").plus({ weeks: 1 });
    const availableSlots = await timeSlotManager.getWeeklySlots(
      startOfWeek.toISODate(),
      endOfWeek.toISODate()
    );
    res.json({ availableSlots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});





module.exports = router;
