//backend app.js
const express = require('express')
const cors = require('cors')
const passport = require("passport")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const path = require('path')
//----------------------------------------- END OF IMPORTS---------------------------------------------------
const app = express()
const db = require('./db/index.js')

const port = process.env.PORT || 4001
const reactClientURL = 'http://localhost:3000' // react client


// Middleware
app.use(express.static('../client/build'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: reactClientURL, // <-- location of the react app we're connecting to
        credentials: true,
    })
)
app.use(
    session({
        secret: "secretcode-pg",
        resave: false,
        saveUninitialized: true,
    })
)
app.use(cookieParser("secretcode-pg"))
app.use(passport.initialize())
app.use(passport.session())
require("./auth/passportConfig")(passport)

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

app.get('/', (req, res) => {
    res.send('hello')
})
app.get('/getAllUsers', db.getAllUsers)

app.post('/login', passport.authenticate('local',{ failureMessage: 'not good',failureRedirect: '/' }), (req, res) => {
    res.send('Authorized')
})

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})