// models/Company.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const Employee = require('./Company'); // Import the Company model

const Company = sequelize.define('Company', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  code: {
    type: DataTypes.STRING,
    unique: true
  },
  name: DataTypes.STRING,
  logo: DataTypes.STRING,
  // birthday: DataTypes.DATE,
  created: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  last_updated: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  

}, {
  tableName: 'Company',
  timestamps: false
});

// Company.hasOne(Company);
// Company.hasMany(Company, { foreignKey: 'id_company', as: 'company' });
// Employee.belongsTo(Company, { foreignKey: 'company_id', as: 'company' });
// Company.belongsTo(User, { foreignKey: 'id_user', as: 'user' });

module.exports = Company;
