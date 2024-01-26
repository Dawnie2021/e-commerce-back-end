const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Product extends Model {}


Product.init(
  {
   product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    // validate that the value is a decimal

  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // Set a default value of 10
    // Validates that the value is numeric
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
      primaryKey: true,
      autoIncrement: true
      // References the category model's id
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
