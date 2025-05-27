const {createUserService, 
    getAllUserService, 
    updateUserService,
    getDeactivedUserService} = require('../services/userServices/userServices')

    
const createUserController = async (req, res) => {
    
    const {usuario, contraseña, rol,actived} = req.body;

console.log('body', req.body);

    if(!usuario || !contraseña || !rol) {
        return res.status(400).json({message: 'Faltan datos obligatorios'});
    }
    const createUser = await createUserService({usuario, contraseña, rol, actived});
    try {
        if(createUser) return res.status(201).json({message: 'Usuario creado correctamente', createUser});
    } catch (error) {
        res.status(500).json({message: 'Error al crear el usuario', error});
    }
}

const getAllUserController = async (req,res) => {
   try {
     const getUser = await getAllUserService();

     return res.status(200).json({message: 'Lista de usuarios', getUser});
   } catch (error) {
    console.error('Error al obtener la lista de usuarios:', error.message);
    return res.status(500).json({message: 'Error al obtener la lista de usuarios', error});
   }
}
const getUserDeactivedControllers = async (req, res) => {
    try {
        const deactivedUser = await getDeactivedUserService()
        if(deactivedUser) {
            return res.status(200).json({message: 'Lista de usuarios desactivados: ', deactivedUser})
        }
    } catch (error) {
        return res.status(500).json({message: 'Error al mostrar la lista de usuarios desactivados', error})
    }
}
const updateUserController = async (req, res) => {
    const { id } = req.params;
    const { usuario, contraseña, rol, actived } = req.body;

    if (!usuario && !contraseña && !rol && actived === undefined) {
        return res.status(400).json({ message: 'No se enviaron datos para modificar' });
    }

    try {
        const updatedUser = await updateUserService({ usuario, contraseña, rol, actived }, id);
        return res.status(200).json({ message: 'Usuario modificado con éxito', updatedUser });
    } catch (error) {
        return res.status(500).json({ message: 'Error al modificar un usuario', error: error.message });
    }
};


module.exports = {
    createUserController,
    getAllUserController,
    updateUserController,
    getUserDeactivedControllers
}