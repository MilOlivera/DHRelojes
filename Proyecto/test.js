const { check, validationResult, body } = require("express-validator");
let db = require("./src/database/models");
const path = require("path");
const bcryptjs = require("bcryptjs");

email = "g@g.com";

let findUsuario = db.Usuario.findOne({
  where: { mail: email },
}).then((resultado) => {
  console.log(resultado);
  return resultado;
});

if (findUsuario !== null) {
  console.log("Expected");
} else {
  console.log("Not Expected");
}
