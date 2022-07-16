module.exports = function (sequelize, dataTypes) {
  let alias = "Usuario";

  let cols = {
    idUser: {
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
      allowNull: false,
    },
    address: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    idRoleFK: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING(255),
      allowNull: true,
    },
  };

  let config = {
    tableName: "user",
    timestamps: false,
  };

  let Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Orden, {
      as: "usuarios",
      foreignKey: "idUserFK",
    });

    Usuario.belongsTo(models.Rol, {
      as: "roles",
      foreignKey: "idRoleFK",
    });
  };

  return Usuario;
};
