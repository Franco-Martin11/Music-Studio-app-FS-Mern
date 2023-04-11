const { Router } = require("express");
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

module.exports = router;
