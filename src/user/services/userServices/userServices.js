const {createUserRepository} = require('../../userRepository/userRepository')

const createUserService = async ({usuario, contraseña, rol}) => {
try {
    return await createUserRepository({usuario, contraseña, rol});
} catch (error) {
    console.error('Error en el servicio de creación de usuario:', error);
    throw new Error('Error en el servicio de creación de usuario');
}
}

module.exports = { 
    createUserService
}