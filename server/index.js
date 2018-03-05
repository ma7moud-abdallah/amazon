const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

//import files
//config file fore connecting to database
const config = require('./config')

// routes files
const userRoute = require('./routes/accounts')
const profileRoute = require('./routes/profile')


// connecting to database
mongoose.connect(config.database, err =>{
    if(err){
        console.log('the error is '+err)
    }else{
        console.log('connected')
    }
})
mongoose.Promise = global.Promise

// execute express
const app = express()

const port = 3000

// use body-parser to read data 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

// use morgan
app.use(morgan('dev'))
app.use(cors())

//basic route
app.use('/accounts',userRoute)
app.use('/profile',profileRoute)

app.listen(config.port)