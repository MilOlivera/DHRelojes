const { check, validationResult, body } = require("express-validator");
let db = require("../src/database/models");
const path = require("path");
const bcryptjs = require("bcryptjs");

let userController = {
  /* llamar a un usuario por id ** llamar a un usuario por id */
  findByPk1: (id) => {
    let userFound = db.Usuario.findByPk(id);
    return userFound;
  },

  /* llamar a un usuario por mail ** llamar a un usuario por mail */
  findByEmail: (mail) => {
    let userFound = db.Usuario.findByEmail(mail);
    return userFound;
  },

  /* llamar a un usuario por campo ** llamar a un usuario por campo */
  findByField1: (field, text) => {
    let userFound = db.Usuario.find((oneUser) => oneUser[field] === text);
    return userFound;
  },

  /* registro ** registro */
  registro: (req, res) => {
    res.render("./users/registro");
  },

  /* login ** login */
  login: (req, res) => {
    res.render("./users/login");
  },

  /* guardar usuario + validaciones ** guardar usuario + validaciones */
  store: (req, res, next) => {
    let avatar;
    if (req.files[0] != undefined) {
      avatar = req.files[0].filename;
    } else {
      avatar = "default-image.jpg";
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

  /* procesar login ** procesar login */
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

  /* perfil de usuario ** perfil de usuario */
  profile: (req, res) => {
    let user = req.session.userLogged;
    res.render("./users/profile", { user });
  },

  /* cerrar sesion ** cerrar sesion */
  logout: (req, res) => {
    res.clearCookie("recordarme");
    req.session.destroy();
    return res.redirect("/");
  },

  /* editar usuario ** editar usuario */
  edit: (req, res) => {
    let user = req.session.userLogged;
    let promesaUsuario = db.Usuario.findByPk(req.params.id);

    Promise.all([user, promesaUsuario]).then(function ([promesaUsuario, user]) {
      res.render("./users/edit", { promesaUsuario, user });
    });
  },

  /* actualizacion de datos ** actualizacion de datos */
  confirmEdit: (req, res) => {
    let promesaUsuario = db.Usuario.findByPk(req.params.id);
    let user = req.session.userLogged;

    let image;
    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = image;
    }

    const resValidation = validationResult(req);
    
    if (resValidation.errors.length > 0) {
      return res.render("./users/edit", {
        errors: resValidation.mapped(),
        oldData: req.body,
        userFind: promesaUsuario,
        user,
      });
    }
    
    db.Usuario.update(
      {
        name: req.body.name,
        lastName: req.body.lastName,
        mail: req.body.mail,
        image: image,
      },
      {
        where: {
          idUser: req.params.id,
        },
      }
    )
    
    .then(function () {
      res.redirect("/");
    });
  },

  /* borrar un usuario ** borrar un usuario */
  delete: (req, res) => {
    let userId = req.params.id;

    db.Usuario.destroy({
      where: {
        idUser: userId,
      },
    });
    res.redirect("/users/allUsers");
  },

  /* llamar a todos usuario ** llamar a todos usuario */
  allUsers: (req, res) => {
    db.Usuario.findAll({
    })
    .then((users) => {
      return res.render("./users/allUsers", {users})
    })
  },
};

module.exports = userController;
