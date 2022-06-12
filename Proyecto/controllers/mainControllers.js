const { hyphenToCamel } = require("ejs/lib/utils");
const fs = require("fs");
const path = require("path");
const {validationResult} = require("express-validator")

const productsFilePath = path.join(__dirname, "../data/users.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let mainController = {

// HOME ** HOME
    index: (req, res) => {
        res.render("index")
    },

// LOGIN ** LOGIN
    login: (req, res) => {
        res.render("./users/login")
    },

// ENVIO REGISTRO ** ENVIO REGISTRO
    registro: (req, res) => {
        res.render("./users/registro")
    },

// GUARDAR REGISTRO ** GUARDAR REGISTRO
    store: (req, res) => {
        // const validacion = validationResult(req)

        // if (validacion.errors.length > 0) {
        //     return res.render("./users/registro", {
        //         errors: validacion.mapped(),
        //         oldData: req.body
        //     })
        // }
    
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
            documento: Number(req.body.documento),
            password: Number(req.body.password),
            image: image
            };
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/');
    },

    add: (req, res) => {
        res.render("./products/productAdd")
    },

    // EDITAR REGISTRO ** EDITAR REGISTRO
    edit: (req, res) => {
        res.render("./products/productEdit")
    }

}

module.exports = mainController