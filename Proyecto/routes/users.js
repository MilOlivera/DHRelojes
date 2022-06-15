const express = require("express");
const path = require("path");
const multer = require('multer');
const router = express.Router();
const userController = require("../controllers/userController.js");

const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

const { check, validationResult, body } = require("express-validator");
const validations = [
    body("name").notEmpty().withMessage("Tenes que escribir un nombre"),
    body("lastName").notEmpty().withMessage("Tenes que escribir un apellido"),
    body("mail").notEmpty().withMessage("Tenes que escribir un mail válido").bail().isEmail().withMessage("Tenes que escribir un formato válido"),
    // body("birth").notEmpty().withMessage("Tenes que elegir tu fecha de nacimiento"),
    body("dni").notEmpty().withMessage("Tenes que escribir tu DNI"),
    // body("genero").notEmpty().withMessage("Tenes que elegir un género"),
    body("address").notEmpty().withMessage("Tenes que escribir una dirección"),
    body("password").notEmpty().withMessage("Tenes que escribir una contraseña"),
    // body("image").custom((value, {req}) => {
    //     let file = req.file
    //     let aceptado = [".jpg", ".png", ".gif"]
    //     if (!file) {
    //         throw new Error ("Tenes que subir una imagen")
    //     } else {
    //         let extencion = path.extname(file.originalname)
    //         if (!aceptado.includes(extencion)) {
    //             throw new Error ("Solo podes subir una imagen JPG, PNG o GIF")
    //         }
    //     }
    //     return true;
    // }),

]

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/users');
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var cargaArchivo = multer({storage: storage});

router.post('/', cargaArchivo.any('image'),validations, userController.store);

router.get('/registro', guestMiddleware, userController.registro);

router.get('/login', guestMiddleware, userController.login);

router.post('/login', userController.loginProcess);
//[check('mail').isEmail().withMessage('Email invalido')]

router.get('/profile', authMiddleware, userController.profile);

router.get('/logout', userController.logOut);


module.exports = router