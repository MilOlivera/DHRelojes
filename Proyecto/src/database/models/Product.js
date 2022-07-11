modolue.exports = function (sequelize, dataTypes) {
  let alias = "Producto";

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
    tableName: "product",
    timestamps: false,
  };

  let Producto = sequelize.define(alias, cols, config);

    Producto.associate(function(models){

      Producto.belongsTo(models.Categoria, {
        
        as: 'categorias',
        foreign: 'idCategoryFK'

      })

      Producto.belongsTo(models.Categoria, {
        as: 'talles',
        foreign: 'idSizeFK'
      })

      Producto.belongsTo(models.Orden, {
        as: 'ordenes',
        foreign: 'idOrderFK'
      })

    })
  return Producto;
};
