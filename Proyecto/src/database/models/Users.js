modolue.exports = function (sequelize, dataTypes) {
  let alias = "User";

  let cols = {
    idUsuarios: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    lastName: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    mail: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    dni: {
      type: dataTypes.INTEGER,
    },
    address: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    idRolesFK: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "Usuarios",
    timestamps: false,
  };

  let User = sequelize.define(alias, cols, config);

  return User;
};
