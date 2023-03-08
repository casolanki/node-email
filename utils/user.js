const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
class User extends Model {}

User.init({
    fromemail: {
        type: DataTypes.STRING
    },
    toemail:{
        type: DataTypes.STRING
    },
    subject:{
        type: DataTypes.STRING
    },
    body:{
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'user',
    timestamps:false
})

module.exports = User;
