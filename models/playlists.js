'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class playlists extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            playlists.belongsToMany(models.videos, {
                as: 'videos',
                through: models.playlists_videos,
                foreignKey: 'playlist_id',
                onDelete: 'cascade',
                hooks: true
            });
            playlists.belongsTo(models.channels, {
                as: 'channel'
            });

            // playlists.belongsTo(models.users, {
            //     as: 'user'
            // })
            // define association here
        }
    };
    playlists.init({
        name: DataTypes.STRING,
        channel_id: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        thumbnail: DataTypes.STRING,
        privacy: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'playlists',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return playlists;
};
