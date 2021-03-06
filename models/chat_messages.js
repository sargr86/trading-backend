'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class chat_messages extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            chat_messages.belongsTo(models.videos, {foreignKey: 'video_id', as: 'video'});
            chat_messages.belongsTo(models.users, {as: 'user', foreignKey: 'from_id'});
            // chat_messages.belongsTo(models.users, {as: 'to_messages', foreignKey: 'to_id'});
        }
    };
    chat_messages.init({
        video_id: DataTypes.INTEGER,
        from_id: DataTypes.INTEGER,
        message: DataTypes.STRING,
        to_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'chat_messages',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return chat_messages;
};
