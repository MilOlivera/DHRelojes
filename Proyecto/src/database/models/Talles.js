modolue.exports = function (sequelize, dataTypes) {
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
    tableName: "Talles",
    timestamps: false,
  };

  let Talle = sequelize.define(alias, cols, config);

  return Talle;
};
