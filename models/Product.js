const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Product extends Model {}


Product.init(
  {
   product_name: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  },
  stock: {
    type: DataTypes.INTEGER
  },
  category_id: {
    type: DataTypes.INTEGER
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
