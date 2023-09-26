const mysql2 = require('mysql2');

module.exports = {
  
  development: {
    username: "b4882f1d7b93de",
    password: "2364f73f",
    database: "heroku_1a6e1b66489a98f",
    host: "us-cdbr-east-06.cleardb.net",
    dialect: "mysql",
    dialectModule: mysql2 // Needed to fix sequelize issues
  },
  test: {
    username: "b4882f1d7b93de",
    password: "2364f73f",
    database: "heroku_1a6e1b66489a98f",
    host: "us-cdbr-east-06.cleardb.net",
    dialect: "mysql",
    dialectModule: mysql2 // Needed to fix sequelize issues

  },
  production: {
    username: "b4882f1d7b93de",
    password: "2364f73f",
    database: "heroku_1a6e1b66489a98f",
    host: "us-cdbr-east-06.cleardb.net",
    dialect: "mysql",
    dialectModule: mysql2 // Needed to fix sequelize issues

  },
};
