const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model { }

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        workout_type: {
            type: DataTypes.STRING,
        },
        body_zone: {
            type: DataTypes.STRING,
        },
        duration: {
            type: DataTypes.INTEGER,
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout',
    }
);

module.exports = Workout;
