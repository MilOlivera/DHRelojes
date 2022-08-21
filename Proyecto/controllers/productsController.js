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

    let tinker = await db.Producto.sequelize.query('SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 1 ')
    let jacquetDroze = await db.Producto.sequelize.query('SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 2 ')
    let centerPomp = await db.Producto.sequelize.query('SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 3 ')
    let colorsNature = await db.Producto.sequelize.query('SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 4 ')

    Promise.all([producto, imagen, categorias, tinker, jacquetDroze, centerPomp, colorsNature]).then(function ([
      producto,
      imagen,
      categorias,
      tinker,
      jacquetDroze,
      centerPomp,
      colorsNature
    ]) {
      return res.render(productsPath + "/productList", {
        producto,
        imagen,
        categorias,
        tinker,
        jacquetDroze,
        centerPomp,
        colorsNature
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
    console.log(req.file);
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
    console.log(req.body);
    res.redirect("/");
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
      }, console.log(promesaImagen, 'soy yo loko'));
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

    let idProduct_image;
    if (req.files[0] != undefined) {
      idProduct_image = req.files[0].filename;
    } else {
      idProduct_image = idProduct_image;
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

    let producto = db.Producto.update(
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

    Promise.all([imagen, producto]).then(function ([imagen, producto]) {
      res.redirect("/");
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
    res.redirect("/");
  },
  
  /* carrito ** carrito */
  cart: (req, res) => {
    db.Producto.findByPk(req.params.id).then(function (detalle) {
      return res.render(productsPath + "/productCart", { detalle });
    });
  },

};

module.exports = productsController;
