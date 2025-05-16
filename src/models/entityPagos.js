const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('entityPagos', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    idUser: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'entityUsers', // Sequelize pone en plural por convención, ajustá si es necesario
        key: 'id'
      }
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fecha_de_pago: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_de_vencimiento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    metodo_de_pago: {
      type: DataTypes.ENUM('efectivo', 'tarjeta', 'transferencia'),
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('pagado', 'pendiente', 'cancelado'),
      allowNull: false
    }
  });
};
