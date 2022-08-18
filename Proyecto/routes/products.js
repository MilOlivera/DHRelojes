const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();
const productsController = require("../controllers/productsController.js");
// const mainControllers = require("../controllers/mainControllers.js")
const adminMiddleware = require('../middleware/adminMiddleware')

const { check, validationResult, body } = require("express-validator");


const validation = [
  body("name")
    .notEmpty()
    .withMessage("Tenes que escribir un nombre")
    .isLength({ min: 5 })
    .withMessage("El nombre debe tener más de cinco caracteres"),
  body("description")
    .isLength({ min: 20 })
    .withMessage("La descripción debe tener veinte caracteres como minimo"),
  body("price")
    .notEmpty()
    .withMessage("Debe ingresar un precio"),
  body("category")
    .notEmpty()
    .withMessage("Debe elegir una categoria"),
];


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/products");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});


var cargaArchivo = multer({ storage: storage });

// VER TODOS LOS PRODUCTOS .get + controler.index "/"
router.get("/", productsController.list);


// CREAR UN PRODUCTO ** CREAR UN PRODUCTO
router.get("/create", productsController.create);
router.post("/", cargaArchivo.any("image"), validation, productsController.store);

// VER CARRITO ** VER CARRITO
router.get("/cart", productsController.cart);

// DELETE ** DELETE
router.delete("/delete/:id", productsController.delete);

// VER UN PRODUCTO ** VER UN PRODUCTO
router.get("/:id", productsController.productDetail);

// EDITAR UN PRODUCTO ** EDITAR UN PRODUCTO
router.get("/:id/edit", adminMiddleware, productsController.edit);
// router.put('/:id', productsController.confirm)

router.put("/:id/edit", cargaArchivo.any("image"), productsController.confirm);

// falta edit del carrito

module.exports = router;
