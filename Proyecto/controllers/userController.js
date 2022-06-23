const path = require("path")
const fs = require('fs')
const { check, validationResult, body } = require("express-validator");
const bcryptjs = require("bcryptjs");

const userFilePath = path.join(__dirname, "../data/users.json");
let users = () => JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const productsFilePath = path.join(__dirname, "../data/users.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let userController = {
    // GUARDAR REGISTRO ** GUARDAR REGISTRO
    store: (req, res, next) => {
        const validacion = validationResult(req)

        if (validacion.errors.length > 0) {
            return res.render("./users/registro", {
                errors: validacion.mapped(),
                oldData: req.body
            })
        
        }

        next();
       let image;
           console.log(req.file);
           if(req.files[0] != undefined){
               image = req.files[0].filename
           } else {
               image = 'default-image.png'
           }
       let newProduct = {
           ...req.body,
           id: products[products.length - 1].id + 1,
           dni: Number(req.body.dni),
           password: bcryptjs.hashSync(req.body.password, 10),
           image: image,
           user: 'guest'
        };

        
       products.push(newProduct)
       fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
       res.redirect('users/login');
   },

    // obtener datos de un usuario ** obtener datos de un usuario
    findByPk: (id) => {
        let dataset = users();
        let userFound = dataset.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByEmail: (mail) => {
        let dataset = users();
        let userFound = dataset.find(oneUser => oneUser.mail === mail);
        return userFound;
    },
    
    findByField: (field, text) => {
        let dataset = users();
        let userFound = dataset.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    registro: (req, res) => {
        res.render("./users/registro")
    },

    login: (req, res) => {
        res.render("./users/login");

    },

    // procesar login ** procesar login
    loginProcess: (req, res) => {
        let userToLogin = userController.findByField('mail', req.body.mail);

        if (userToLogin) {
            console.log(req.body)
            let passwordMatched = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (passwordMatched) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                console.log(req.body)
                console.log(userToLogin)

                if(req.body.recordarme) {
                    res.cookie('recordarme', req.body.mail, { maxAge:  100000 })
                }

                return res.redirect('/users/login');
            };

            return res.render ('./users/login', {
                errors: {
                    password: {
                        msg: 'Contraseña incorrecta'
                    }
    
                },
                // oldData: req.body
            });
            
        }

        return res.render ('./users/login', {
            errors: {
                mail: {
                    msg: 'El correo electrónico ingresado es inválido'
                }
            },
            // oldData: req.body
        });
    },

    profile: (req, res) => {
        res.render("./users/profile", {
            user: req.session.userLogged
        })
    },

    logout: (req, res) => {
        res.clearCookie('recordarme');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = userController;