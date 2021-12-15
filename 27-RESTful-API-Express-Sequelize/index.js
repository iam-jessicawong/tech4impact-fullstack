const express = require("express")
const sequelize = require("./config/db.config")
const Hewan = require("./models/hewan")
const router = require("./routes")

require("dotenv").config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully');
  })
  .then(() => {
    Hewan.sync().then(() => console.log("table created"))
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.get("/ping", (req, res) => {
  res.send("welcome")
})

app.listen(port, () => console.log("server is listening on port", port))