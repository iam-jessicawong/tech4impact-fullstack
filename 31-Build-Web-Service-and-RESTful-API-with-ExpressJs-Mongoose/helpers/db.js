const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const defaultURI = "mongodb+srv://admin:sWXJS4JhahL68sqW@tfi.se73k.mongodb.net/onlinecourses?retryWrites=true&w=majority"
const uri = process.env.URI || defaultURI

async function openDBConnection() {
  return mongoose.connect(uri)
}

module.exports = {
  openDBConnection
}