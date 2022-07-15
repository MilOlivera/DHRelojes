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
    // const validacion = validationResult(req);

    // if (validacion.errors.length > 0) {
    //   return res.render("./users/registro", {
    //     errors: validacion.mapped(),
    //     oldData: req.body,
    //   });
    // }
    // next();
    // let image;
    // console.log(req.file);
    // if (req.files[0] != undefined) {
    //   image = req.files[0].filename;
    // } else {
    //   image = "default-image.png";
    // }

    db.Usuario.create({
      name: req.body.name,
      lastName: req.body.lastName,
      mail: req.body.mail,
      dni: req.body.dni,
      address: req.body.address,
      password: bcryptjs.hashSync(req.body.password, 10),
      idRoleFK: 2,
    });
    res.redirect("users/login");
  },

  // procesar login ** procesar login
  loginProcess: (req, res) => {
    let userToLogin = db.Usuario.findOne({
      where: { mail: req.body.mail },
    }).then((resultado) => {
      console.log(resultado.password);
      return resultado.password;
    });
    Promise.all(userToLogin).then(function (userToLogin) {
      if (userToLogin) {
        let passwordMatched = bcryptjs.compareSync(
          req.body.password,
          userToLogin
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
