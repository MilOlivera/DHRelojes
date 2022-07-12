module.exports = function (sequelize, dataTypes) {
  let alias = "Categoria";

  let cols = {
    idCategory: {
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
    tableName: "category",
    timestamps: false,
  };

  let Categoria = sequelize.define(alias, cols, config);

  Categoria.associate = function (models) {
    Categoria.hasMany(models.Producto, {
      as: "categorias",
      foreignKey: "idCategoryFK",
    });
  };

  return Categoria;
};
