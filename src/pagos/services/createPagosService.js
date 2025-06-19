const {createPagosRepository} = require('../repository/pagosRepository')


const createPagosService = async (monto, fecha_de_pago, fecha_de_vencimiento, metodo_de_pago, estado, idUser) => {
    const createPagos = await createPagosRepository(monto, fecha_de_pago, fecha_de_vencimiento, metodo_de_pago, estado)
    if(!createPagos) {
        throw new Error('Error en el servicio de creación de pagos')
    }
    return createPagos
}

module.exports = {
    createPagosService
}