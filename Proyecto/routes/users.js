const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();
const userController = require("../controllers/userController.js");
let db = require("../src/database/models");

const guestMiddleware = require("../middleware/guestMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware")

const { check, validationResult, body } = require("express-validator");

let user = db.Usuario;

const validation = [
  body("name")
    .notEmpty().withMessage(" ")
    .isLength({ min: 2 })
    .withMessage(" "),
  body("lastName")
    .notEmpty()
    .withMessage(" ")
    .isLength({ min: 2 })
    .withMessage(" "),
  body("mail")
    .notEmpty()
    .withMessage(" ")
    .bail()
    .isEmail()
    .withMessage(" ")
    .custom((userEmail) => {
      return new Promise((resolve, reject) => {
        user.findOne({ where: { mail: userEmail } }).then((emailExist) => {
          if (emailExist !== null) {
            reject(new Error(" "));
          } else {
            resolve(true);
          }
        });
      });
    }),
  body("dni").notEmpty()
  .withMessage(" "),
  body("address").notEmpty()
  .withMessage(" "),
  body("password")
    .isString()
    .notEmpty()
    .withMessage(" ")
    .isLength({ min: 8 })
    .withMessage(" ")
    .isStrongPassword()
    .withMessage(" "),
];

const validationEdit = [
  body("name")
    .notEmpty().withMessage(" ")
    .isLength({ min: 2 })
    .withMessage(" "),
  body("lastName")
    .notEmpty()
    .withMessage(" ")
    .isLength({ min: 2 })
    .withMessage(" "),
  body("mail")
    .notEmpty()
    .withMessage(" ")
    .bail()
    .isEmail()
    .withMessage(" ")
    .custom((userEmail) => {
      return new Promise((resolve, reject) => {
        user.findOne({ where: { mail: userEmail } }).then((emailExist) => {
          if (emailExist !== null) {
            reject(new Error(" Debes usar un mail que no este en la base de datos "));
          } else {
            resolve(true);
          }
        });
      });
    }),
  body("dni").notEmpty()
  .withMessage(" "),
  body("address").notEmpty()
  .withMessage(" "),
];

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/users");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var cargaArchivo = multer({ storage: storage });

/* guardar usuario ** guardar usuario */
router.post("/", cargaArchivo.any("image"), validation, userController.store);

/* registro ** registro */
router.get("/registro", guestMiddleware, userController.registro);

/* login ** login */
router.get("/login", guestMiddleware, userController.login);
router.post("/login", userController.loginProcess);

/* profile  ** profile */
router.get("/profile", authMiddleware, userController.profile);

/* log out ** log out */
router.get("/logout", userController.logout);

/* editar usuario ** editar usuario */
router.get("/edit/:id", authMiddleware, userController.edit);
router.put("/edit/:id", cargaArchivo.any("image"), validationEdit, userController.confirmEdit);

/* eliminar usuario ** eliminar usuario */
router.delete("/delete/:id", userController.delete);

/* all users - admin ** all users - admin */
router.get("/allusers", adminMiddleware, userController.allUsers);

module.exports = router;
