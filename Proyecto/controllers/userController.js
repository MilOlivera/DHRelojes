let db = require("../src/database/models");
const path = require("path");
// const fs = require('fs')
const { check, validationResult, body } = require("express-validator");
const bcryptjs = require("bcryptjs");

let userController = {
  // obtener datos de un usuario ** obtener datos de un usuario
  findByPk: (id) => {
    let userFound = db.Usuario.findByPk(id);
    return userFound;
  },

  findByEmail: (mail) => {
    let userFound = db.Usuario.findByEmail(mail);
    return userFound;
  },

  findByField: (field, text) => {
    let userFound = db.Usuario.findByField(field, text);
    return userFound;
  },

  registro: (req, res) => {
    res.render("./users/registro");
  },

  login: (req, res) => {
    res.render("./users/login");
  },

  store: (req, res, next) => {
    const validacion = validationResult(req);

    if (validacion.errors.length > 0) {
      return res.render("./users/registro", {
        errors: validacion.mapped(),
        oldData: req.body,
      });
    }
    next();
    let image;
    console.log(req.file);
    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = "default-image.png";
    }
    let idRoleFK = "guest";
    db.Usuario.create({
      name: req.body.name,
      lastName: req.body.lastName,
      mail: req.body.mail,
      dni: req.body.dni,
      address: req.body.address,
      password: bcryptjs.hashSync(req.body.password, 10),
      idRoleFK: idRoleFK,
    });
    res.redirect("users/login");
  },

  // procesar login ** procesar login
  loginProcess: (req, res) => {
    let userToLogin = userController.findByField("mail", req.body.mail);

    if (userToLogin) {
      console.log(req.body);
      let passwordMatched = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (passwordMatched) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        console.log(req.body);
        console.log(userToLogin);

        if (req.body.recordarme) {
          res.cookie("recordarme", req.body.mail, { maxAge: 100000 });
        }

        return res.redirect("/users/login");
      }

      return res.render("./users/login", {
        errors: {
          password: {
            msg: "Contraseña incorrecta",
          },
        },
        // oldData: req.body
      });
    }

    return res.render("./users/login", {
      errors: {
        mail: {
          msg: "El correo electrónico ingresado es inválido",
        },
      },
      // oldData: req.body
    });
  },

  profile: (req, res) => {
    res.render("./users/profile", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    res.clearCookie("recordarme");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = userController;
