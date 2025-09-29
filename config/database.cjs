const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();


let database = process.env.MYSQL_DATABASE;
let user = process.env.MYSQL_USER;
let password = process.env.MYSQL_PASSWORD;
let host = process.env.MYSQL_HOST;


if (process.env.NODE_ENV === "production") {
  database = process.env.PROD_MYSQL_DATABASE || database;
  user = process.env.PROD_MYSQL_USER || user;
  password = process.env.PROD_MYSQL_PASSWORD || password;
  host = process.env.PROD_MYSQL_HOST || host;
}

// Initialize Sequelize
const sequelize = new Sequelize(database, user, password,
{
  host,
  dialect: "mysql",
  logging: false,
});

// IIFE to test connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database Connection Failed:", error);
  }
})();

module.exports = sequelize;
