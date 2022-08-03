let db = require("../../src/database/models");
// let imagePath = require("../../public/images/users");

let userControllerApi = {
  apiUser: (req, res) => {
    db.Usuario.findAll({
      attributes: [
        "idUser",
        "name",
        "mail",
        { detail: "localhost:3042/users/profile" },
      ],
      order: [["idUser", "ASC"]],
    }).then(function (users) {
      return res.status(200).json({
        count: users.length,
        data: users,
        status: 200,
      });
    });
  },

  apiUserId: (req, res) => {
    db.Usuario.findByPk(req.params.id, {
      attributes: ["idUser", "name", "lastName", "mail", "dni", "address"],
    }).then(function (users) {
      return res.status(200).json({
        data: users,
        // image: URL.createObjectURL(),
        status: 200,
      });
    });
  },
};

module.exports = userControllerApi;
