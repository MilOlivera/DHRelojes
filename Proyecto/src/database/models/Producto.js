modolue.exports = function (sequelize, dataTypes) {
  let alias = "Product";

  let cols = {
    idProducto: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(50),
      allowNull: false,
    },
    idCategoryFK: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    idTalleFK: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    idProductImageFK: {
      type: dataTypes.INTEGER,
    },
    Ordenes_idOrdenes: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "Producto",
    timestamps: false,
  };

  let Product = sequelize.define(alias, cols, config);

  return Product;
};
