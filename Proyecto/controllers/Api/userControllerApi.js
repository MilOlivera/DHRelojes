let db = require("../../src/database/models");
// let imagePath = require("../../public/images/users");

let userControllerApi = {
  apiUser: (req, res) =>
    db.Usuario.findAll().then((usuarios) => {
      let usuariosNew = [];

      usuarios.forEach(function (usuario) {
        usuariosNew.push({
          id: usuario.idUser,
          name: usuario.name,
          email: usuario.mail,
          detail: "http:localhost3042/users/profile/" + usuario.idUser,
        });
      });

      let objetoLiteral = {
        count: usuarios.length,
        users: usuariosNew,
      };
      res.send(objetoLiteral);
    }),

  //   apiUser: (req, res) => {
  //     db.Usuario.findAll({
  //       attributes: [
  //         "idUser",
  //         "name",
  //         "mail",
  //         { detail: "localhost:3042/users/profile" },
  //       ],
  //       order: [["idUser", "ASC"]],
  //     }).then(function (users) {
  //       return res.status(200).json({
  //         count: users.length,
  //         data: users,
  //         status: 200,
  //       });
  //     });
  //   },

  apiUserId: (req, res) => {
    db.Usuario.findByPk(req.params.id, {
      attributes: [
        "idUser",
        "name",
        "lastName",
        "mail",
        "dni",
        "address",
        "image",
      ],
    }).then(function (users) {
      return res.status(200).json({
        data: users,
        image: `http://localhost:3042/images/users/${users.image}`,
        status: 200,
      });
    });
  },

  apiLastUser: async (req, res) => {
    const lastUser = await db.Producto.sequelize.query('SELECT idUser, name, lastName FROM dhrelojes.user ORDER BY idUser DESC LIMIT 1')
    Promise.all([lastUser])
    .then(function ([lastUser]) {
        return res.status(200).json({
          id: lastUser,
          status: 200,
        });
    })
  },
  apiLastUserImg: async (req, res) => {
    const lastUserImg = await db.Imagen.sequelize.query('SELECT image FROM dhrelojes.user ORDER BY idUser DESC LIMIT 1')
    console.log(lastUserImg)
    Promise.all([lastUserImg])
    .then(function ([lastUserImg]) {
        return res.status(200).json({
          id: lastUserImg,
          status: 200,
        });
    })
  }
};

module.exports = userControllerApi;
