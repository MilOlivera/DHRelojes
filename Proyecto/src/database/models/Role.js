module.exports = function (sequelize, dataTypes) {
  let alias = "Rol";

  let cols = {
    idRole: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
  };

  let config = {
    tableName: "role",
    timestamps: false,
  };

  let Rol = sequelize.define(alias, cols, config);

  Rol.associate = function (models) {
    Rol.hasMany(models.Usuario, {
      as: "roles",
      foreignKey: "idRoleFK",
    });
  };

  return Rol;
};
