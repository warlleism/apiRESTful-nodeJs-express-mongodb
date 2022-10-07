const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./controllers/routes')
const authController = require('./controllers/projectController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/auth', router)
app.use('/project', authController)

app.listen(3001, () => {
    console.log('conectado')
})