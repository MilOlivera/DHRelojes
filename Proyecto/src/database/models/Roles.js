modolue.exports = function (sequelize, dataTypes) {
  let alias = "Rol";

  let cols = {
    idRoles: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
  };

  let config = {
    tableName: "Roles",
    timestamps: false,
  };

  let Rol = sequelize.define(alias, cols, config);

  return Rol;
};
