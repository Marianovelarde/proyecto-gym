const {createUserService} = require('../services/userServices/userServices')
const createUserController = async (req, res) => {
    
    const {usuario, contraseña, rol} = req.body;

console.log('body', req.body);

    if(!usuario || !contraseña || !rol) {
        return res.status(400).json({message: 'Faltan datos obligatorios'});
    }
    const createUser = await createUserService({usuario, contraseña, rol});
    try {
        if(createUser) return res.status(201).json({message: 'Usuario creado correctamente', createUser});
    } catch (error) {
        res.status(500).json({message: 'Error al crear el usuario', error});
    }
}


module.exports = {
    createUserController
}