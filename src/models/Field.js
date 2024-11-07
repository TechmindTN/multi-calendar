// models/Field.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const Employee = require('./Field'); // Import the Field model

const Field = sequelize.define('Field', {
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
  tableName: 'Field',
  timestamps: false
});

// Field.hasOne(Field);
// Field.hasMany(Field, { foreignKey: 'id_field', as: 'field' });
// Employee.belongsTo(Field, { foreignKey: 'field_id', as: 'field' });

module.exports = Field;
