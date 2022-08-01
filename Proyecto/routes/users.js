const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();
const userController = require("../controllers/userController.js");
let db = require("../src/database/models");

const guestMiddleware = require("../middleware/guestMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

const { check, validationResult, body } = require("express-validator");

let user = db.Usuario;

const validation = [
  body("name")
    .notEmpty()
    // .withMessage("Tenes que escribir un nombre")
    .isLength({ min: 2 })
    .withMessage("El nombre debe ser más largo que dos caracteres"),
  body("lastName")
    .notEmpty()
    .withMessage("Tenes que escribir un apellido")
    .isLength({ min: 2 })
    .withMessage("El apellido debe ser más largo que dos caracteres"),
  body("mail")
    .notEmpty()
    .withMessage("Tenes que escribir un mail válido")
    .bail()
    .isEmail()
    .withMessage("Tenes que escribir un formato válido")
    .custom((userEmail) => {
      return new Promise((resolve, reject) => {
        user.findOne({ where: { mail: userEmail } }).then((emailExist) => {
          if (emailExist !== null) {
            reject(new Error("Este mail ya está registrado"));
          } else {
            resolve(true);
          }
        });
      });
    }),
  body("dni").notEmpty().withMessage("Tenes que escribir tu DNI"),
  body("address").notEmpty().withMessage("Tenes que escribir una dirección"),
  // body("password")
  //   .isString()
  //   .notEmpty()
  //   .withMessage("Tenes que escribir una contraseña")
  //   .isLength({ min: 8 })
  //   .withMessage("La contraseña debe tener al menos 8 caracteres"),
    // .isStrongPassword()
    // .withMessage(
    //   "La contraseña debe tener al una letra mayuscula, una letra minuscula, un número y un caracter especial"
    // ),
  // body("image").custom((value, req) => {
  //   let file = req.file;
  //   console.log(file, "error 1");
  //   let acceptedExtensions = [".jpg", ".png", ".gif"];
    
  //     let fileExtension = path.extname(file);

  //     if (!acceptedExtensions.includes(fileExtension)) {
  //       throw new Error(
  //         `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
  //           ", "
  //         )}`
  //       );
  //     }
  //   })
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

router.post("/", cargaArchivo.any("image"), validation, userController.store);

router.get("/registro", guestMiddleware, userController.registro);

router.get("/login", guestMiddleware, userController.login);

router.post("/login", userController.loginProcess);
//[check('mail').isEmail().withMessage('Email invalido')]

router.get("/profile", authMiddleware, userController.profile);

router.get("/logout", userController.logout);

router.get("/edit/:id", authMiddleware, userController.edit);

router.put("/edit/:id", userController.confirmEdit);

module.exports = router;
