const express = require('express');
const app = express();
const path = require('path')

const publicPath = path.resolve(__dirname, "./public")

app.use(express.static(publicPath));

const rutasIndex = require("./routes/index.js")
const rutasProducts = require("./routes/products.js")
const rutasUsers = require("./routes/users.js")

app.listen(3035, () => { console.log("Servidor Corriendo") })

app.set ("view engine", "ejs")

app.use ("/", rutasIndex)
app.use ("/products", rutasProducts)
app.use ("/users", rutasUsers)

// app.use ("/productDetail", rutasIndex)
// app.use ("/login", rutasIndex)
// app.use ("/cart", rutasIndex)
// app.use ("/registro", rutasIndex)