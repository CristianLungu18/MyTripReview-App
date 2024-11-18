const Sequelize = require("sequelize");
require("dotenv").config();
module.exports = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  {
    timestamps: false,
  }
);
