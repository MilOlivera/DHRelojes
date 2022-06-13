const path = require("path")
const fs = require('fs')
const { check, validationResult, body } = require("express-validator");
const bcryptjs = require("bcryptjs");

const userFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

let userController = {
    // obtener datos de un usuario ** obtener datos de un usuario
    findByPk: (id) => {
        let userFound = users.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByEmail: (mail) => {
        let userFound = users.find(oneUser => oneUser.mail === mail);
        return userFound;
    },
    
    findByField: (field, text) => {
        let userFound = users.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    registro: (req, res) => {
        res.render("./users/registro")
    },

    login: (req, res) => {
        res.render("./users/login")
    },

    // procesar login ** procesar login
    loginProcess: (req, res) => {
        let userToLogin = userController.findByField('mail', req.body.mail);

        if (userToLogin) {
            let passwordMatched = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (passwordMatched) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('/users/profile');
            } 

            return res.render ('./users/login', {
                errors: {
                    mail: {
                        msg: 'Credenciales invalidas'
                    }
                }
            });
        }

        return res.render ('./users/login', {
            errors: {
                mail: {
                    msg: 'Este mail no esta registrado'
                }
            }
        });
    },

    profile: (req, res) => {
        res.render("./users/profile", {
            user: req.session.userLogged
        })
    },

    logOut: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = userController