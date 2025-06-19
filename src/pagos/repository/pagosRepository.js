const {EntityPagos} = require('../../db')



const createPagosRepository = async (monto, fecha_de_pago, fecha_de_vencimiento, metodo_de_pago, estado, idUser) => {

    const createPagos = await EntityPagos.create(monto, fecha_de_pago, fecha_de_vencimiento, metodo_de_pago, estado,idUser)

    return createPagos
}

module.exports = {
    createPagosRepository
}