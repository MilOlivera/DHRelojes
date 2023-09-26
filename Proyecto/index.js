const express = require("express");
const app = express();
const path = require("path");
//const session = require("express-session");
const session = require("cookie-session");
const cookies = require("cookie-parser");
const cors = require("cors");

const methodOverride = require("method-override");
const publicPath = path.resolve(__dirname, "./public");

const userLoggedMiddleware = require("./middleware/userLoggedMiddleware");

app.use(
  session({
    secret: "secreto!",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(userLoggedMiddleware);

app.use(express.static(publicPath));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookies());
app.use(cors());

const rutasIndex = require("./routes/index.js");
const rutasProducts = require("./routes/products.js");
const rutasUsers = require("./routes/users.js");
const rutasApi = require("./routes/Api/Api");

const port = 3042;

app.listen(port, () => {
  console.log("Servidor Corriendo en " + port);
});

app.set("view engine", "ejs");

app.use("/", rutasIndex);
app.use("/products", rutasProducts);
app.use("/users", rutasUsers);
app.use("/api", rutasApi);

app.use((req, res, next) => {
  res.status(404).render("not-found");
});
