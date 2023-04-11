const mongoose = require("mongoose");
const {db} = require('./config.env');
const {dbUser,dbPass} = db

const mongoConfig = (app) => {
  mongoose.set('strictQuery', false)
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.iwadzsn.mongodb.net/?retryWrites=true&w=majority`)
      .then(() => {
        console.log('DB is connected')
      })
      .catch((error) => {
        console.log('Cannot connect with the DB', error.message)
    })
};

module.exports = mongoConfig;