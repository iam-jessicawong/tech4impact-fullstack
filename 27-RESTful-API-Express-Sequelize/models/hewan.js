const Sequelize = require("sequelize")
const sequelize = require("../config/db.config")

const Hewan = sequelize.define('hewan', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  namaSpesies: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  umur: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn('NOW')
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn('NOW')
  }
})

module.exports = Hewan