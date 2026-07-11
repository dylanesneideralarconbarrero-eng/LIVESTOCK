const user = require('../models/userModel');

// crear usuario
const userCreate = async (data) => {
    try {
        const newUser = await user.create(data);
        return newUser;
    }catch (error) {
        console.log(error);
        throw error; 
    }
}                                                                                                                   
// obtener todos los usuarios
const getAllUsers = async () => {
    try {
        const users = await user.findAll();
        return users;
    }catch (error) {
        console.log(error);
        throw error; 
    }
}
// obtener usuario por id
const getUserById = async (id) => {
    try {
        const userid = await user.findOne({ where: { id } });
        return userid;
    }catch (error) {
        console.log(error);
    }
}
// eliminar usuario
const deleteUser = async (id) => {
    try {
        const deleteUser = await user.destroy({ where: { id } });
        return deleteUser;
    }catch (error) {
        console.log(error);
    }
}
// actualizar usuario
const updateUser = async (id, data) => {
    try {
        const updateUser = await user.update(data, { where: { id } });
        return updateUser;
    }catch (error) {
        console.log(error);
    }
}
module.exports = {
    userCreate,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser
}