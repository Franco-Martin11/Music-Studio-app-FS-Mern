const timeslotsController = require('../timeSlots/controller.timeSlots')

const router = app => {
    app.use('/api/timeslots', timeslotsController)
}


module.exports = router