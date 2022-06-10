const path = require("path")

let mainController = {
    index: (req, res) => {
        res.render("index")
    },
    
    add: (req, res) => {
        res.render("./products/productAdd")
    },

    edit: (req, res) => {
        res.render("./products/productEdit")
    }

}

module.exports = mainController