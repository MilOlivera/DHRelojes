const express = require("express")
const router = express.Router()
const mainControllers = require("../controllers/mainControllers.js")

router.get("/login", mainControllers.login)
router.get("/registro", mainControllers.registro)

module.exports = router