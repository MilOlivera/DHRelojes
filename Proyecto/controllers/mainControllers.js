const path = require("path")

let mainController = {
    index: (req, res) => {
        res.render("index")
    },
    // productDetail: (req, res) => {
    //     res.render("./products/productDetail")
    //     let idProducto = req.params.id
    //     res.send ("elegiste el producto " + idProducto)
    // },
    
    login: (req, res) => {
        res.render("./users/login")
    },
    cart: (req, res) => {
        res.render("./products/productCart")
    },
    registro: (req, res) => {
        res.render("./users/registro")
    },
    
    add: (req, res) => {
        res.render("./products/productAdd")
    },

    edit: (req, res) => {
        res.render("./products/productEdit")
    }

}

module.exports = mainController