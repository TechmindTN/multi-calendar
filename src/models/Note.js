// models/Note.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const Employee = require('./Note'); // Import the Note model

const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  color: DataTypes.STRING,

  // birthday: DataTypes.DATE,
  created: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  last_updated: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  start_time: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  deadline: {
    type: DataTypes.DATE,
    // defaultValue: Sequelize.NOW
  },
  

}, {
  tableName: 'Note',
  timestamps: false
});

// Note.hasOne(Note);
// Note.hasMany(Note, { foreignKey: 'id_note', as: 'note' });
// Employee.belongsTo(Note, { foreignKey: 'note_id', as: 'note' });

module.exports = Note;
