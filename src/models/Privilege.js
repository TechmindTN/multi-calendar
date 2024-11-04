// models/Privilege.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const Role = require('./Role'); // Import the Privilege model

const Privilege = sequelize.define('Privilege', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
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
  tableName: 'Privilege',
  timestamps: false
});
Privilege.belongsToMany(
  Role, 
  {
      // this can be string (model name) or a Sequelize Model Object Class
      // through is compulsory since v2
      through: 'Role_Privilege',

      // GOTCHA
      // note that this is the Parent's Id, not Child. 
      foreignKey: 'id_privilege'
  }
)

Role.belongsToMany(
  Privilege, 
  {
      // this can be string (model name) or a Sequelize Model Object Class
      // through is compulsory since v2
      through: 'Role_Privilege',

      // GOTCHA
      // note that this is the Parent's Id, not Child. 
      foreignKey: 'id_role'
  }
)



module.exports = Privilege;
