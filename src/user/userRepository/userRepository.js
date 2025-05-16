const {EntityUser} = require('../../db.js');

const createUserRepository = async (usuario, contraseña, rol) => {
    console.log('usuario', usuario);
    
    const createUser = await EntityUser.create(usuario, contraseña, rol);
    return createUser;
    
}

module.exports = {
    createUserRepository
}