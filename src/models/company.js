const { DataTypes } = require('sequelize'); 
const {sequelize} = require('../dbase/db'); 

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
    }, 
    security_key: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    num_sucursal: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: true 
}); 

Company.sync(); 
// Codigo.sync({ force: false }).then(() => {
//     console.log('Table created');
// }); 

module.exports = Company;