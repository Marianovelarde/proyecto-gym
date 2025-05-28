const {EntityUser} = require('../../db.js');

const createUserRepository = async (usuario, contraseña, rol) => {
    console.log('usuario', usuario);
    
    const createUser = await EntityUser.create(usuario, contraseña, rol);
    return createUser;
    
}

const getAllUserRepository = async () => {
    const allUsers = await EntityUser.findAll({
        where: {
            actived: true
        }
    });
    return allUsers;
}

const getDeactivedUserRepository = async () => {
    const deactivedUser = EntityUser.findAll({
        where: {
            actived: false
        }
    })
    return deactivedUser
}
const updateUserRepository = async (data, id) => {
    
    const updateUser = await EntityUser.findByPk(id)
      await updateUser.update(data)

      return updateUser
}
module.exports = {
    createUserRepository,
    getAllUserRepository,
    updateUserRepository,
    getDeactivedUserRepository
}