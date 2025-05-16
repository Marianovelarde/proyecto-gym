const { all } = require('../../../router');
const {createUserRepository, getAllUserRepository} = require('../../userRepository/userRepository')

const createUserService = async ({usuario, contraseña, rol}) => {
try {
    return await createUserRepository({usuario, contraseña, rol});
} catch (error) {
    console.error('Error en el servicio de creación de usuario:', error);
    throw new Error('Error en el servicio de creación de usuario');
}
}

const getAllUserService = async () => {
const allUsers = await getAllUserRepository();
if (!allUsers) {
    throw new Error('No se encontraron usuarios', error.message);    
}
return allUsers;
}

module.exports = { 
    createUserService,
    getAllUserService
}