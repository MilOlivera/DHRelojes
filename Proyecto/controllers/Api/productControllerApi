const { promiseImpl } = require("ejs");
let db = require("../../src/database/models");
// let imagePath = require("../../public/images/products");

let productControllerApi = {
  apiProduct: (req, res) => {
    let productos = db.Producto.findAll({
      attributes: [
        "idProduct",
        "name",
        "description",
        { detail: "localhost:3042/products/" + "idProduct" },
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
      attributes: ["idProduct", "name", "description", "price", "idCategoryFK"],
    });
    categoria = db.Categoria.findAll();
    Promise.all([producto, categoria]).then(function ([producto, categoria]) {
      return res.status(200).json({
        data: producto,
        array: [{ category: categoria[producto.idCategoryFK].name }],
        //   image: URL.createObjectURL()
        status: 200,
      });
    });
  },
};

module.exports = productControllerApi;
