const { DataTypes } = require('sequelize'); 
const {sequelize} = require('../dbase/db'); 

const User = sequelize.define('users', {   
    id_user: {
        type: DataTypes.INTEGER,
        // defaultvalue: DataTypes.UUIDV4,
        primaryKey: true, 
        autoIncrement: true 
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    ref_id_company: {
        type: DataTypes.INTEGER,
            allowNull: false
    }, 
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    timestamps: true 
}); 

User.sync(); 
// Codigo.sync({ force: false }).then(() => {
//     console.log('Table created');
// }); 

module.exports = User;