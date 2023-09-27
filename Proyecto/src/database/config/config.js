const mysql2 = require('mysql2');

module.exports = {
  
  development: {
    username: "root",
    password: "",
    database: "DHrelojes",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectModule: mysql2 // Needed to fix sequelize issues
  },
  test: {
    username: "root",
    password: "",
    database: "DHrelojes",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectModule: mysql2 // Needed to fix sequelize issues

  },
  production: {
    username: "root",
    password: "",
    database: "DHrelojes",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectModule: mysql2 // Needed to fix sequelize issues

  },
};