const express = require("express")
const path = require("path");
const multer = require('multer')
const router = express.Router()
<<<<<<< HEAD
const mainControllers = require("../controllers/mainControllers.js")
const {body} = require("express-validator")
// const validations = [
//     body("name").notEmpty().withMessage("Tenes que escribir un nombre"),
//     body("lastName").notEmpty().withMessage("Tenes que escribir un apellido"),
//     body("mail").notEmpty().withMessage("Tenes que escribir un mail válido").bail().isEmail().withMessage("Tenes que escribir un formato válido"),
//     body("birth").notEmpty().withMessage("Tenes que elegir tu fecha de nacimiento"),
//     body("dni").notEmpty().withMessage("Tenes que escribir tu DNI"),
//     body("genero").notEmpty().withMessage("Tenes que elegir un género"),
//     body("address").notEmpty().withMessage("Tenes que escribir una dirección"),
//     body("password").notEmpty().withMessage("Tenes que escribir una contraseña"),
//     body("image").custom((value, {req}) => {
//         let file = req.file
//         let aceptado = [".jpg", ".png", ".gif"]
//         if (!file) {
//             throw new Error ("Tenes que subir una imagen")
//         } else {
//             let extencion = path.extname(file.originalname)
//             if (!aceptado.includes(extencion)) {
//                 throw new Error ("Solo podes subir una imagen JPG, PNG o GIF")
//             }
//         }
//         return true;
//     }),

// ]

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/users')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var cargaArchivo = multer({storage: storage})

router.get("/login", mainControllers.login)
router.get("/registro", mainControllers.registro)
router.post("/", cargaArchivo.any("image"), mainControllers.store)
=======
const usersControllers = require("../controllers/usersControllers.js")

router.get("/login", usersControllers.login)

router.get("/registro", usersControllers.registro)
// router.post("/registro", usersControllers.??)

router.get("/profile", usersControllers.profile)
>>>>>>> 8a13d56de54d129f0f27afa204e02cd946389bf1

module.exports = router