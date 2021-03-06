'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class stock_types extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            // define association here
        }
    };
    stock_types.init({
        name: DataTypes.STRING,
        value: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'stock_types',
        timestamps: false,
        underscored: true
    });
    return stock_types;
};
