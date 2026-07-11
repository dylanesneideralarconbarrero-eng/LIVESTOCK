const{DataTypes} = require('sequelize');
const db = require('../config/ConectionDB');


const userModel =db.define('user',{

    //campos de la tabla de usuarios

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    name:{
        type: DataTypes.STRING, //nombre del usuario
        allowNull: false,
        unique: true
    },
    email:{
        type: DataTypes.STRING,//correo electronico del usuario
        allowNull: false,
        unique: true
    },
    
    password:{
        type: DataTypes.STRING,   //contraseña del usuario
        allowNull: false
    },
    role:{
        type: DataTypes.STRING, //rol del usuario (admin, instructor,)
        allowNull: false,
        unique: true
    }
});
module.exports = userModel;