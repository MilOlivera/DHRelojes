const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();
const productsController = require("../controllers/productsController.js");
// const mainControllers = require("../controllers/mainControllers.js");
const adminMiddleware = require("../middleware/adminMiddleware");

const { check, validationResult, body } = require("express-validator");

const paymentController = require("../controllers/paymentsController");
const paymentService = require("../services/paymentServices");
const paymentInstance = new paymentController(new paymentService());

const dotenv = require("dotenv");

dotenv.config();

const validation = [
  body("name")
    .notEmpty()
    .withMessage("Tenes que escribir un nombre")
    .isLength({ min: 5 })
    .withMessage("El nombre debe tener más de cinco caracteres"),
  body("description")
    .isLength({ min: 20 })
    .withMessage("La descripción debe tener veinte caracteres como minimo"),
  body("price").notEmpty().withMessage("Debe ingresar un precio"),
  body("category").notEmpty().withMessage("Debe elegir una categoria"),
];

const validationEdit = [
  body("name")
    .notEmpty()
    .withMessage("Tenes que escribir un nombre")
    .isLength({ min: 5 })
    .withMessage("El nombre debe tener más de cinco caracteres"),
  body("description")
    .isLength({ min: 20 })
    .withMessage("La descripción debe tener veinte caracteres como minimo"),
  body("price").notEmpty().withMessage("Debe ingresar un precio"),
  body("category").notEmpty().withMessage("Debe elegir una categoria"),
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

/* ver todos los productos ** ver todos los productos */
router.get("/", productsController.list);

/* crear un producto ** crear un producto */
router.get("/create", productsController.create);
router.post(
  "/",
  cargaArchivo.any("image"),
  validation,
  productsController.store
);

/* carrito ** carrito */
router.get("/emptyCart", productsController.emptyCart);
router.get("/cart", productsController.cart);
router.post("/cart", productsController.cartAdd);

router.get("/jsonLinks", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link",
  });
});

router.post("/payment", (req, res, next) => {
  paymentInstance.getPaymentLink(req, res);
});

router.get("/subscription", function (req, res, next) {
  paymentInstance.getSubscriptionLink(req, res);
});

/* eliminar un producto ** eliminar un producto */
router.delete("/delete/:id", productsController.delete);

/* detalle de un producto ** detalle de un producto */
router.get("/:id", productsController.productDetail);

/* editar un producto ** editar un producto */
router.get("/:id/edit", adminMiddleware, productsController.edit);
router.put(
  "/:id/edit",
  cargaArchivo.any("image"),
  validationEdit,
  productsController.confirm
);

router.post(
  "/dashboard/create",
  cargaArchivo.single("image"),
  productsController.dashCreate
);

module.exports = router;
