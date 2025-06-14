const {createUserRepository, 
    getAllUserRepository, 
    updateUserRepository,
    getDeactivedUserRepository} = require('../../userRepository/userRepository')

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
const getDeactivedUserService = async () => {
    const userDeactived = await getDeactivedUserRepository()
   
    if(!userDeactived) {
        throw new Error('Error en el servicio get de usuarios desactivados')
    }
     return userDeactived
}
const updateUserService = async (data, id) => {
    try {
        
        const updateUser = await updateUserRepository(data, id)
        return updateUser
    } catch (error) {
        
        if(!updateUser) {
            throw new Error ('Error en el servicio de modificación de usuario', error.message)
    }
    }
}

module.exports = { 
    createUserService,
    getAllUserService,
    updateUserService,
    getDeactivedUserService
}