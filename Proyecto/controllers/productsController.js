const { hyphenToCamel } = require("ejs/lib/utils");
let db = require("../src/database/models");
const path = require("path");
const { check, validationResult, body } = require("express-validator");

const productsPath = path.join(__dirname, "../views/products");

const productsController = {
  /* ver todos los productos ** ver todos los productos */
  list: async (req, res) => {
    let producto = await db.Producto.findAll();
    let imagen = await db.Imagen.findAll();
    let categorias = await db.Categoria.findAll();

    let tinker = await db.Producto.sequelize.query(
      "SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 1 "
    );
    let jacquetDroze = await db.Producto.sequelize.query(
      "SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 2 "
    );
    let centerPomp = await db.Producto.sequelize.query(
      "SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 3 "
    );
    let colorsNature = await db.Producto.sequelize.query(
      "SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 4 "
    );

    Promise.all([
      producto,
      imagen,
      categorias,
      tinker,
      jacquetDroze,
      centerPomp,
      colorsNature,
    ]).then(function ([
      producto,
      imagen,
      categorias,
      tinker,
      jacquetDroze,
      centerPomp,
      colorsNature,
    ]) {
      return res.render(productsPath + "/productList", {
        producto,
        imagen,
        categorias,
        tinker,
        jacquetDroze,
        centerPomp,
        colorsNature,
      });
    });
  },

  /* crear un producto ** crear un producto */
  create: (req, res) => {
    db.Categoria.findAll().then(function (categorias) {
      return res.render(productsPath + "/productAdd", { categorias });
    });
  },

  /* guardar un producto creado ** guardar un producto creado */
  store: (req, res) => {
    let idProduct_image;
    if (req.files[0] != undefined) {
      idProduct_image = req.files[0].filename;
    } else {
      idProduct_image = "default-image.png";
    }

    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render(productsPath + "/productAdd", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    db.Producto.create(
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        idCategoryFK: req.body.category,
      },
      db.Imagen.create({
        name: idProduct_image,
      })
    );
    res.redirect("/products");
  },

  /* detalle de un producto ** detalle de un producto */
  productDetail: (req, res) => {
    let promesaProducto = db.Producto.findByPk(req.params.id);
    // let promesaTalle = db.Talle.findAll();
    let promesaImagen = db.Imagen.findByPk(req.params.id);
    Promise.all([promesaProducto, promesaImagen]).then(function ([
      promesaProducto,
      promesaImagen,
    ]) {
      return res.render(productsPath + "/productDetail", {
        promesaProducto,
        promesaImagen,
      });
    });
  },

  /* edicion de un producto ** edicion de un producto */
  edit: (req, res) => {
    let promesaImagen = db.Imagen.findByPk(req.params.id);
    let promesaProducto = db.Producto.findByPk(req.params.id);
    let categorias = db.Categoria.findAll();
    Promise.all([promesaImagen, promesaProducto, categorias]).then(function ([
      promesaImagen,
      promesaProducto,
      categorias,
    ]) {
      res.render(productsPath + "/productEdit", {
        promesaImagen,
        promesaProducto,
        categorias,
      });
    });
  },

  /* actualizacion de datos ** actualizacion de datos */
  confirm: (req, res) => {
    let productFind = req.params.id;
    let categorias = db.Categoria.findAll();

    let idProduct_image;
    if (req.files[0] != undefined) {
      idProduct_image = req.files[0].filename;
    } else {
      idProduct_image = idProduct_image;
    }

    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render(productsPath + "/productEdit", {
        errors: resultValidation.mapped(),
        oldData: req.body,
        idProduct: productFind,
        categorias,
      });
    }

    let imagen = db.Imagen.update(
      {
        name: idProduct_image,
      },
      {
        where: {
          idProduct_image: productFind,
        },
      }
    );

    promesaProducto = db.Producto.update(
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        idCategoryFK: req.body.category,
      },

      {
        where: {
          idProduct: productFind,
        },
      }
    );

    // db.Producto.update(
    //   {
    //     name: req.body.name,
    //     description: req.body.description,
    //     price: req.body.price,
    //     idCategoryFK: req.body.category,
    //   },
    //   db.Imagen.update({
    //     name: idProduct_image,
    //   },
    //   {
    //     where: {
    //       idProduct_image: productFind,
    //     },
    //   }
    //   )
    // );

    Promise.all([imagen, promesaProducto, resultValidation]).then(function ([
      imagen,
      promesaProducto,
      resultValidation,
    ]) {
      res.redirect("/products");
    });
  },

  /* eliminar un producto ** eliminar un producto */
  delete: (req, res) => {
    db.Imagen.destroy({
      where: {
        idProduct_image: req.params.id,
      },
    });

    db.Producto.destroy({
      where: {
        idProduct: req.params.id,
      },
    });
    res.redirect("/products");
  },

  /* carrito ** carrito */
  cart: (req, res) => {
    res.render(productsPath + "/productCart");
  },

  cartAdd: (req, res) => {
    let nombreProducto = req.body.name;
    let precioProducto = req.body.price;
    let imagenProducto = req.body.img;
    Promise.all([nombreProducto, precioProducto, imagenProducto]).then(
      function ([nombreProducto, precioProducto, imagenProducto]) {
        return res.render(productsPath + "/productCart", {
          nombreProducto,
          precioProducto,
          imagenProducto,
        });
      }
    );
  },

  emptyCart: (req, res) => {
    return res.render(productsPath + "/emptyCart");
  },

  dashCreate: (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const idCategoryFK = req.body.idCategoryFK;
    const image = req.file;

    let idProduct_image;
    if (image != undefined) {
      idProduct_image = image.filename;
    } else {
      idProduct_image = "default-image.png";
    }

    db.Producto.create(
      {
        name: name,
        description: description,
        price: price,
        idCategoryFK: idCategoryFK,
      },
      db.Imagen.create({
        name: idProduct_image,
      })
    );
  },
};

module.exports = productsController;
