const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, {
  host: process.env.DB_SERVER, // Sesuaikan dengan server database
  dialect: process.env.DB_DIALECT, // Sesuaikan dengan database (mssql, mysql, postgres, sqlite)
  logging: false, // Matikan logging SQL di console
});

// sequelize.authenticate()
//   .then(() => console.log("Database connected!"))
//   .catch(err => console.error("Connection error:", err));

module.exports = sequelize;
