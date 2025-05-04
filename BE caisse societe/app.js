const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.connect('mongodb://127.0.0.1:27017/caisseS')

const app = express()


app.use(express.json());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions))


let encaisseRoute = require('./routes/encaisse')
let decaisseRoute = require('./routes/decaisse')
let loginRoute = require('./routes/login')

app.use('/', encaisseRoute)
app.use('/', decaisseRoute)
app.use('/', loginRoute)


module.exports = app