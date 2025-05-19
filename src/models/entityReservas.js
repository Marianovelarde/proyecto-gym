const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('entityReservas', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'entityUsers'
        }
    } ,
    fecha: {
        type: DataTypes.DATE,
        allowNull: false    
    },
    horario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'confirmado', 'cancelado'),

    }
    })
}