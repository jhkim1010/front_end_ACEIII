const { DataTypes } = require('sequelize'); 
const {sequelize} = require('../database/database'); 

const Company = sequelize.define('companies', {   
    id_company: {
        type: DataTypes.INTEGER,
        // defaultvalue: DataTypes.UUIDV4,
        primaryKey: true, 
        autoIncrement: true 
    },
    companyname: {
        type: DataTypes.STRING,
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