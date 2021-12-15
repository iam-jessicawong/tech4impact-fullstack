require('dotenv').config()

const Sequelize = require("sequelize")

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  database: process.env.DB_NAME || "tfi_express_sequelize",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || ""
})

module.exports = sequelize