require('./config/config.js')

const express = require('express')
const mongoose = require('mongoose')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Config de routes
app.use(require('./routes/index.js'))


mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err

    console.log('BD online');
})

app.listen(process.env.PORT, () => console.log('Escuchando puerto 3000'))