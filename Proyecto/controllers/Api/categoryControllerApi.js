const { promiseImpl } = require("ejs");
const { sequelize } = require("../../src/database/models");
let db = require("../../src/database/models");

let categoryControllerApi = {
  apiTotalCategory: (req, res) => {
    let categories = db.Categoria.findAll({
      attributes: ["idCategory", "name"],
      order: [["idCategory", "ASC"]],
    }).then(function (categories) {
      return res.status(200).json({
        count: categories.length,
        // countByCategory: { categoria1: productos.idCategoryFK.length },
        category: categories,
        status: 200,
      });
    });
  },

  countByCategory: async (req, res) => {
    const categorias = await db.Producto.sequelize.query(
      "SELECT category.name, COUNT(idCategoryFK) as total FROM dhrelojes.product INNER JOIN category ON product.idCategoryFK=category.idCategory group by idCategoryFK"
    );
    Promise.all([categorias]).then(function ([categorias]) {
      return res.status(200).json({
        id: categorias,
        status: 200,
      });
    });
  },

  // db.Producto.sync ({ alter: true }). then(() => {
  //   return Producto.findAll ({
  //   attributes: ['idCategoryFK', [ sequelize.fn('COUNT', sequelize.col('idCategoryFK')), 'FUNCIONAPORFA' ]],
  //   group: 'idCategoryFk'});
  // })

  // .then(function (pruebas) {
  //   return res.status(200).json({
  //     county: pruebas.length,
  //     // countByCategory: { categoria1: productos.idCategoryFK.length },
  //     prueba: FUNCIONAPORFA,
  //     status: 200,
  //   });
  // })

  // .catch((error) => {
  //   console.log(error)
  // })

  // const pruebas = db.Producto.findAll({
  //   attributes: [
  //     'idCategoryFk',
  //     'name',
  //     [sequelize.fn('COUNT', sequelize.col('idCategoryFK')), 'prueba'],
  //   ],
  //   group: 'idCategoryFK',
  //   order: [["idCategoryFK", "ASC"]],
  // })

  //   .then(function (pruebas) {
  //   return res.status(200).json({
  //     count: pruebas.length,
  //     categoria: pruebas,
  //     prueba: prueba,
  //     status: 200,
  //   });
  // });
};

module.exports = categoryControllerApi;
