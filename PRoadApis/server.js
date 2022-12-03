const express = require('express')
const cors = require('cors')
const sequelize = require('sequelize')

const app = express()

var corsOptions = {
    origin: "http://localhost:3000"
}

const port = 8000
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('<h1>Welcome<h1>')
})

require('./routes/vehicle.routes')(app)
require('./routes/driver.routes')(app)
require('./routes/pannel.routes')(app)


const db = require('./models')
const destination = db.destination
const pannel = db.pannel
const user = db.user
const vehicle = db.vehicle
const driver = db.driver
db.sequelize.sync({ alter: true })
    .then(_ => console.log('Models Created'))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})