const mongoose = require('mongoose')


const loginSchema = mongoose.Schema({
    name :String,
    email :{type: String, unique: true},
    password : String
})

const user = mongoose.model('user', loginSchema)

module.exports = user