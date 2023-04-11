require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
  db: {
    dbUser: process.env.USER_DB || 'admin',
    dbPass: process.env.PASS_DB || 'admin',
    dbHost: process.env.HOST_DB,
    dbName: process.env.NAME_DB,
  }
}

module.exports = config