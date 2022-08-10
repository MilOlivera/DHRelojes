// const sequelize = db.sequelize;
const { Op } = require("sequelize");
const express = require("express");
const path = require("path");
const router = express.Router();
const userController = require("../../controllers/Api/userControllerApi");
const productController = require("../../controllers/Api/productControllerApi");
let db = require("../../src/database/models");
let user = db.Usuario;

router.get("/users", userController.apiUser);

router.get("/users/:id", userController.apiUserId);

router.get("/products", productController.apiProduct);

// router.get("/products/:id", productController.apiProductId);

module.exports = router;
