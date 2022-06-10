const path = require("path")

let userController = {
    login: (req, res) => {
        res.render("./users/login")
    },

    registro: (req, res) => {
        res.render("./users/registro")
    },

    profile: (req, res) => {
        res.render("./users/profile")
    },
}

module.exports = userController