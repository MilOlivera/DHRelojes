module.exports = function (sequelize, dataTypes) {
  let alias = "Producto";

  let cols = {
    idProduct: {
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
    idSizeFK: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    idProduct_imageFK: {
      type: dataTypes.INTEGER,
    },
    idOrderFK: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "product",
    timestamps: false,
  };

  let Producto = sequelize.define(alias, cols, config);

  Producto.associate = function (models) {
    Producto.belongsTo(models.Categoria, {
      as: "categorias",
      foreign: "idCategoryFK",
    });

    Producto.belongsTo(models.Categoria, {
      as: "talles",
      foreign: "idSizeFK",
    });

    Producto.belongsTo(models.Orden, {
      as: "ordenes",
      foreign: "idOrderFK",
    });
  };

  return Producto;
};
