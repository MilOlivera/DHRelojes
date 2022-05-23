const express = require('express');
const app = express();
const path = require('path')

const methodOverride = require("method-override");
const publicPath = path.resolve(__dirname, "./public")

app.use(express.static(publicPath));
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended : false}))
app.use(express.json())

const rutasIndex = require("./routes/index.js")
const rutasProducts = require("./routes/products.js")
const rutasUsers = require("./routes/users.js")

app.listen(3035, () => { console.log("Servidor Corriendo en 3035") })

app.set ("view engine", "ejs")

app.use ("/", rutasIndex)
app.use ("/products", rutasProducts)
app.use ("/users", rutasUsers)
