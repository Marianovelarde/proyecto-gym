const {createUserRepository} = require('../../user/userRepository/userRepository.js')

const createUserService = async (usuario, contraseña, rol) => {
    return await createUserRepository(usuario, contraseña, rol);
}

module.exports = { 
    createUserService
}