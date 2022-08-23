const { promiseImpl } = require("ejs");
const { sequelize } = require("../../src/database/models");
let db = require("../../src/database/models");

let productControllerApi = {
  apiProduct: (req, res) => {
    let productos = db.Producto.findAll({
      attributes: [
        "idProduct",
        "name",
        "description",
        // { includes: [{ detail: "localhost:3042/products/" }] },
      ],
      order: [["idProduct", "ASC"]],
    }).then(function (productos) {
      return res.status(200).json({
        count: productos.length,
        // countByCategory: { categoria1: productos.idCategoryFK.length },
        products: productos,
        status: 200,
      });
    });
  },

  apiProductId: (req, res) => {
    producto = db.Producto.findByPk(req.params.id, {
      attributes: [
        "idProduct",
        "name",
        "description",
        "price",
        "idCategoryFK",
        "idProduct_imageFK",
      ],
    });
    categoria = db.Categoria.findAll();
    imagen = db.Imagen.findAll();
    Promise.all([producto, categoria, imagen]).then(function ([
      producto,
      categoria,
      imagen,
    ]) {
      return res.status(200).json({
        data: {
          // id: producto.idProduct,
          name: producto.name,
          description: producto.description,
          price: producto.price,
        },
        category: categoria[producto.idCategoryFK].name,
        image: `http://localhost:3042/images/products/${
          imagen[producto.idProduct_imageFK].name
        }`,
        status: 200,
      });
    });
  },

  apiLastProduct: async (req, res) => {
    const lastProd = await db.Producto.sequelize.query(
      "SELECT name FROM dhrelojes.product ORDER BY idProduct DESC LIMIT 1"
    );
    Promise.all([lastProd]).then(function ([lastProd]) {
      return res.status(200).json({
        id: lastProd,
        status: 200,
      });
    });
  },

  apiTinker: async (req, res) => {
    let tinker = await db.Producto.sequelize.query(
      "SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 1 "
    );
    Promise.all(tinker).then(function (tinker) {
      return res.status(200).json({
        data: tinker,
        status: 200,
      });
    });
  },

  apiJacquetDroze: async (req, res) => {
    let jacquetDroze = await db.Producto.sequelize.query(
      "SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 2 "
    );
    Promise.all(jacquetDroze).then(function (jacquetDroze) {
      return res.status(200).json({
        data: jacquetDroze,
        status: 200,
      });
    });
  },

  apiCenterPomp: async (req, res) => {
    let centerPomp = await db.Producto.sequelize.query(
      "SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 3 "
    );
    Promise.all(centerPomp).then(function (centerPomp) {
      return res.status(200).json({
        data: centerPomp,
        status: 200,
      });
    });
  },

  apiColorsNature: async (req, res) => {
    let colorsNature = await db.Producto.sequelize.query(
      "SELECT product.name, product.description, product.price, product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image WHERE idCategoryFK = 4 "
    );
    Promise.all(colorsNature).then(function (colorsNature) {
      return res.status(200).json({
        data: colorsNature,
        status: 200,
      });
    });
  },

  filterList: async (req, res) => {
    let productFilter = await db.Producto.sequelize.query(
      "SELECT product.idProduct, product.name, product.description, product.price,product.idCategoryFK , product_image.name as image FROM product INNER JOIN product_image ON product.idProduct = product_image.idProduct_Image"
    );
    Promise.all(productFilter).then(function (productFilter) {
      return res.status(200).json({
        data: productFilter,
        status: 200,
      });
    });
  },
  apiLastProductImg: async (req, res) => {
    const lastProdImg = await db.Imagen.sequelize.query('SELECT name FROM dhrelojes.product_image ORDER BY idProduct_image DESC LIMIT 1')
    console.log(lastProdImg)
    Promise.all([lastProdImg])
    .then(function ([lastProdImg]) {
        return res.status(200).json({
          id: lastProdImg,
          status: 200,
        });
    })
  }
};

module.exports = productControllerApi;
