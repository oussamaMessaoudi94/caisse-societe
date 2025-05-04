const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('../modules/login')
const router = express.Router()

const sekretKey = 'societe'

router.post('/login/signup', (req, res)=>{
    bcrypt.hash(req.body.password, 10).then((bcrypted)=>{
        const loginSchema = new user ({
            name: req.body.name,
            email: req.body.email,
            password: bcrypted
        })
        loginSchema.save().then(()=>{
            res.status(200).json({
                message: 'added user'
            })
        })
    })
})

router.post('/login/login', async(req, res)=>{
    const {email, password} = req.body
    const users = await user.findOne({email})
    if (!users) {
        return res.status(200).json({
            message: '0'
        })
    }
    const isMatch = await bcrypt.compare (password, users.password)
    if (!isMatch) {
        return res.status(200).json({
            message: '1'
        })
    }
    const token = jwt.sign({id: users._id, name: users.name, email: users.email}, sekretKey, { expiresIn: 60 })
    res.status(200).json({
        message: 'login successful',
        use: token
    })
})





module.exports = router