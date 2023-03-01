//backend app.js
const express = require('express')
const cors = require('cors')
const passport = require("passport")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const path = require('path')
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const { expressjwt } = require('express-jwt');
const logger = require('./config/logger.js')
const morgan = require('morgan')
//----------------------------------------- END OF IMPORTS---------------------------------------------------
const app = express()
const db = require('./db/index.js')

const port = process.env.PORT || 4001
const secret = process.env.SECRET || 'supersecret';
const reactClientURL = 'http://localhost:3000' // react client

const morganMiddleware = morgan(
    'tiny',
    {
      stream: {
        write: (message) => logger.http(message.trim())
      }
    }
  )

// Middleware
app.use(morganMiddleware)
app.use(express.static('../client/build'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
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

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
        return next()
    }
    console.log('this does not work');
}

function captureData(req, res, next) {
    console.log(req.body)
    res.locals.data = req.body
    console.log(res.locals.data)
    return next()
}
//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

app.get('/', (req, res) => {
    logger.debug('in home page')
    res.send('hello')
})
app.get('/getAllUsers', checkAuthenticated, db.getAllUsers)

app.post('/login', passport.authenticate('local',{ failureMessage: 'not good',failureRedirect: '/notWorking' }), (req, res) => {
    res.send('Authorized')
})

app.get('/getLoginUser', checkAuthenticated, db.getLoginUser)

app.post('/register', captureData, db.register, (req, res) => {
    res.send('Created user')
})

app.get('/notWorking', (req, res) => {
    res.send('Incorrect EVERYTHING')
})

app.get('/logout', (req, res) => {
    console.log('I ran')
    req.logOut(function(err) {
        if (err) { return next(err);}
        res.send('logged out')
    })
})

app.get('/getAllClasses', db.getAllClasses)

app.post('/addClass', checkAuthenticated, captureData, db.addStudentClass, (req, res) => {
    res.send('it worked!!!')
})

app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '../client/build/')});
  });

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})