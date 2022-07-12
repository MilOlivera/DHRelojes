const { hyphenToCamel } = require("ejs/lib/utils");
const fs = require("fs");
const path = require("path");
let db = require("../src/database/models");

const productsPath = path.join(__dirname, "../views/products");

const productsController = {
  // VER TODOS LOS PRODUCTOS ** VER TODOS LOS PRODUCTOS
  list: (req, res) => {
    db.Producto.findAll().then(function (products) {
      res.render(productsPath + "/productList", { products });
    });
  },

  // CREAR UN PRODUCTO ** CREAR UN PRODUCTO
  create: (req, res) => {
    let categorias = db.Categorias.findAll();
    let productos = db.Producto.findAll();
    let talles = db.Talle.findAll()
      .all([categorias, productos, talles])
      .then(function (allCategorys, allProducts, allTalles) {
        return res.render(productsPath + "/productAdd", {
          products: allProducts,
          categorias: allCategorys,
          talles: allTalles,
        });
      });
  },

  // GUARDAR UN PRODUCTO CREADO ** GUARDAR UN PRODUCTO CREADO
  store: (req, res) => {
    let image;
    console.log(req.file);
    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = "default-image.png";
    }
    db.Producto.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
    });
    res.redirect("/");
  },

  // DETALLE DE UN PRODUCTO ** DETALLE DE UN PRODUCTO
  productDetail: (req, res) => {
    db.Producto.findByPk(req.params.id).then(function (detalle) {
      return res.render(productsPath + "/productAdd", { detalle });
    });
  },
  // EDICION DE UN PRODUCTO ** EDICION DE UN PRODUCTO
  edit: (req, res) => {
    db.Producto.findByPk(req.params.id).then(function (detalle) {
      res.render(productsPath + "/productEdit", { detalle });
    });
  },
  // ACTUALIZACION DE DATOS ** ACTUALIZACION DE DATOS
  confirm: (req, res) => {
    let image;
    console.log(req.file);
    if (req.files) {
      image = req.files;
    } else {
      image = productFind.image;
    }

    db.Producto.update(
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/");
  },
  // DELETE ** DELETE
  delete: (req, res) => {
    db.Producto.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  },
  // CARRITO ** CARRITO
  cart: (req, res) => {
    db.Producto.findByPk(req.params.id).then(function (detalle) {
      return res.render(productsPath + "/productCart", { detalle });
    });
  },
};

module.exports = productsController;
