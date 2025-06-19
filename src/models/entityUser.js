const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('entityUser', {
        idUser: {
           type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
  unique: true
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rol: {
            type: DataTypes.ENUM('admin', 'entrenador', 'cliente'),
            allowNull: false
        },
        actived: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, 
        {
        paranoid: true,
        createdAt: 'createCharacteristic_at',
        updatedAt: 'modifiedCharacteristic_at',
        deletedAt: 'deleteCharacteristic_at'
    });
    
}

