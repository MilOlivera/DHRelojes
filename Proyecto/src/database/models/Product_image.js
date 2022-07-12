module.exports = function (sequelize, dataTypes) {
  let alias = "Imagen";

  let cols = {
    idProductImage: {
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
    tableName: "product_image",
    timestamps: false,
  };

  let Imagen = sequelize.define(alias, cols, config);

  Imagen.associate = function (models) {
    Imagen.hasMany(models.Producto, {
      as: "imagenes",
      foreignKey: "idProduct_imageFK",
    });
  };
  return Imagen;
};
