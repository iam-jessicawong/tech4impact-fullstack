const express = require("express")
require("dotenv").config()
const db = require("./helpers/db")
const router = require("./routes")

const app = express()
const port = process.env.PORT || 3000

async function main() {
  try {
    await db.openDBConnection()
  
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(router)
  
    app.listen(port, () => console.log("server is listening on port", port))
  } catch (error) {
    console.log("main: error:", error.message)
  }
}

main()
