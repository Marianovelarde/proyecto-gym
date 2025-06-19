const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('entityPagos', {
    idPagos: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
  primaryKey: true
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
