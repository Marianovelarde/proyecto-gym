const {createPagosService} = require('../services/createPagosService')


const createPagosControllers = async (req,res) => {

    const {monto, fecha_de_pago, fecha_de_vencimiento, metodo_de_pago, estado, idUser} = req.body
  

    try {
        const createPagos = await createPagosService({monto, fecha_de_pago, fecha_de_vencimiento, metodo_de_pago, estado, idUser})
        if(monto, fecha_de_pago, fecha_de_vencimiento, metodo_de_pago, estado, idUser) {
            return res.status(201).json({message: 'Pago registrado con éxito', createPagos })
        }
    } catch (error) {
        return res.status(500).json({message: 'Error al crear un pago', error})
    }
}

module.exports = {
    createPagosControllers
}