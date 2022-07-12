module.exports = function (sequelize, dataTypes) {
  let alias = "Talle";

  let cols = {
    idTalle: {
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
    tableName: "size",
    timestamps: false,
  };

  let Talle = sequelize.define(alias, cols, config);

  Talle.associate = function (models) {
    Talle.hasMany(models.Producto, {
      as: "talles",
      foreignKey: "idSizeFK",
    });
  };
  return Talle;
};
