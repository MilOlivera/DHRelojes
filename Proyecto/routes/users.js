const express = require("express")
const router = express.Router()
const usersControllers = require("../controllers/usersControllers.js")

router.get("/login", usersControllers.login)

router.get("/registro", usersControllers.registro)
// router.post("/registro", usersControllers.??)

router.get("/profile", usersControllers.profile)

module.exports = router