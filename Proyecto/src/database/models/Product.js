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
      type: dataTypes.STRING(2000),
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(9,2),
      allowNull: false,
    },
    idCategoryFK: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    idSizeFK: {
      type: dataTypes.INTEGER,
      allowNull: true,
    },
    idProduct_imageFK: {
      type: dataTypes.INTEGER,
      allowNull: true,
    },
    idOrderFK: {
      type: dataTypes.INTEGER,
      allowNull: true,
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
      foreignKey: "idCategoryFK",
    });

    Producto.belongsTo(models.Categoria, {
      as: "talles",
      foreignKey: "idSizeFK",
    });

    Producto.belongsTo(models.Orden, {
      as: "ordenes",
      foreignKey: "idOrderFK",
    });
  };

  return Producto;
};
