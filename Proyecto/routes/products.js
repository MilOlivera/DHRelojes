const express = require("express")
const router = express.Router()
const mainControllers = require("../controllers/mainControllers.js")

router.get("/detail", mainControllers.productDetail)
router.get("/cart", mainControllers.cart)
router.get("/add", mainControllers.add)
router.get("/edit", mainControllers.edit)

module.exports = router