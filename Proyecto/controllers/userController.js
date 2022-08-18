const { check, validationResult, body } = require("express-validator");
let db = require("../src/database/models");
const path = require("path");
const bcryptjs = require("bcryptjs");

let userController = {
  // obtener datos de un usuario ** obtener datos de un usuario
  findByPk1: (id) => {
    let userFound = db.Usuario.findByPk(id);
    return userFound;
  },

  findByEmail: (mail) => {
    let userFound = db.Usuario.findByEmail(mail);
    return userFound;
  },

  findByField1: (field, text) => {
    let userFound = db.Usuario.find((oneUser) => oneUser[field] === text);
    return userFound;
  },

  registro: (req, res) => {
    res.render("./users/registro");
  },

  login: (req, res) => {
    res.render("./users/login");
  },

  store: (req, res, next) => {
    let avatar;
    if (req.files[0] != undefined) {
      avatar = req.files[0].filename;
    } else {
      avatar = "default-image.jfif";
    }

    const resultValidation = validationResult(req);
    
    if (resultValidation.errors.length > 0) {
      return res.render("./users/registro", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    db.Usuario.create({
      name: req.body.name,
      lastName: req.body.lastName,
      mail: req.body.mail,
      dni: req.body.dni,
      address: req.body.address,
      password: bcryptjs.hashSync(req.body.password, 10),
      idRoleFK: 2,
      image: avatar,
    });
    res.redirect("users/login");
  },

  // procesar login ** procesar login
  loginProcess: (req, res) => {
    let userToLogin = db.Usuario.findOne({
      where: { mail: req.body.mail },
    })
      .then((resultado) => {
        return resultado;
      })
      .then(function (userToLogin) {
        if (userToLogin) {
          let passwordMatched = bcryptjs.compareSync(
            req.body.password,
            userToLogin.password
          );
          if (passwordMatched) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            if (req.body.recordarme) {
              res.cookie("recordarme", req.body.mail, { maxAge: 100000 });
            }
            return res.redirect("/users/login");
          }
          return res.render("./users/login", {
            errors: { password: { msg: "Contraseña incorrecta" } },
          });
        }
        return res.render("./users/login", {
          errors: {
            mail: { msg: "El correo electrónico ingresado es inválido" },
          },
        });
      });
  },

  profile: (req, res) => {
    let user = req.session.userLogged;
    res.render("./users/profile", { user });
  },

  logout: (req, res) => {
    res.clearCookie("recordarme");
    req.session.destroy();
    return res.redirect("/");
  },
  edit: (req, res) => {
    let user = req.session.userLogged;
    let promesaUsuario = db.Usuario.findByPk(req.params.id);
    Promise.all([user, promesaUsuario]).then(function ([promesaUsuario, user]) {
      res.render("./users/edit", { promesaUsuario, user });
    });
  },

  confirmEdit: (req, res) => {
    let image;
    console.log(req.files[0])
    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = image;
    }

    let userFind = req.params.id;

    db.Usuario.update(
      {
        name: req.body.name,
        lastName: req.body.lastName,
        mail: req.body.mail,
        dni: req.body.dni,
        address: req.body.address,
        // password: req.body.password,
        image: image,
      },
      {
        where: {
          idUser: userFind,
        },
      }
    ).then(function () {
      res.redirect("/");
    });
  },
};

module.exports = userController;
