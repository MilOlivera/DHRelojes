const { hyphenToCamel } = require("ejs/lib/utils");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

let mainController = {
  // HOME ** HOME
  index: (req, res) => {
    res.render("index");
  },

  // add: (req, res) => {
  //     res.render("./products/productAdd")
  // },

  // // EDITAR REGISTRO ** EDITAR REGISTRO
  // edit: (req, res) => {
  //     res.render("./products/productEdit")
  // }
};

module.exports = mainController;
