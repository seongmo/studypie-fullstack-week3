require('dotenv-flow').config()
const express = require('express')
const bodyParser = require('body-parser')

const {PORT = 3000, DATA_MODE} = process.env

const movieRouter =
  DATA_MODE === 'knex'
    ? require('./movies-router-knex')
    : require('./movies-router')

const app = express()

app.use(bodyParser.json())

app.use('/movies', movieRouter)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
