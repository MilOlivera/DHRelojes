const { promiseImpl } = require("ejs");
const { sequelize } = require("../../src/database/models");
let db = require("../../src/database/models");

let categoryControllerApi = {
    apiTotalCategory: (req, res) => {
    let categories = db.Categoria.findAll({
      attributes: [
        "idCategory",
        "name"
      ],
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

  countByCategory: (req, res) => {
    const categorias = sequelize.query('SELECT idCategoryFK, COUNT(*) FROM dhrelojes.product group by idCategoryFK');
    console.log(categorias)
  },


//   const getAllCategories = async (req, res) => {
//     try {
//       const categories = await Category.findAll();
//       const totalCategory= await Category.count();
//       return res.json({
//         meta: {
//             status: 200,
//             total: categories.length,
//             url: "api/categories/all"
//         },
//         data: categories,
//        totalCategory
//       })
//     } catch (error) {
//       return console.log(error)
//     }
//   };
}

module.exports = categoryControllerApi