module.exports = function (sequelize, dataTypes) {
  let alias = "Orden";

  let cols = {
    idOrder: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    idUserFK: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    compraRealizada: {
      type: dataTypes.BOOLEAN,
      allowNull: false,
    },
    create_time: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    update_time: {
      type: dataTypes.DATE,
      allowNull: false,
    },
  };

  let config = {
    tableName: "order",
    timestamps: false,
  };

  let Orden = sequelize.define(alias, cols, config);

  Orden.associate = function (models) {
    Orden.hasMany(models.Producto, {
      as: "ordenes",
      foreignKey: "idOrderFK",
    });

    Orden.belongsTo(models.Usuario, {
      as: "usuarios",
      foreignKey: "idUserFK",
    });
  };

  return Orden;
};
