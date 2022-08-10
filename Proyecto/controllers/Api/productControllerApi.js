const { promiseImpl } = require("ejs");
let db = require("../../src/database/models");
// let imagePath = require("../../public/images/products");

// products: (req, res) =>
//     db.Product.findAll({ include: [{ association: "categorias" }] }).then(
//       (productos) => {

//         let productosNew = [];

//         productos.forEach(function (productos) {
//           let categorias = productos.categorias.map((categoria) => {
//             return categoria.categoria;
//           });

//           productosNew.push({
//             id: productos.id,
//             name: productos.nombre,
//             descripcion: productos.descripcion,
//             detail: "users/detail/" + productos.id,
//             categoria: categorias
//           });
//         });

// async function countByCategory() {
//   const categoriasDb = await db.Category.findAll({include: [{ association: "categorias" }]})
//   const categorias_info = await categoriasDb
//   return categorias_info
// }
// let objetoLiteral = {
//   count: productos.length,
//   products: productosNew,
//   // countByCategory: ,
// };
// res.send(countByCategory());
// }

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
