const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoConfig = require('./config/config.mongo')
const router = require('./router')

const app = express()

mongoConfig()

app.use(express.json())
app.use(cors());
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

router(app)

module.exports = app
