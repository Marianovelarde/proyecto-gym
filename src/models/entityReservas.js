const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('entityReservas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
       
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