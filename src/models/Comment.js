// models/Comment.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');  // Import the Sequelize instance
const Task = require('./Task'); // Import the Comment model
const User = require('./User'); 

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  status: DataTypes.STRING,
  attachement: DataTypes.STRING,
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
  tableName: 'Comment',
  timestamps: false
});

// Comment.hasOne(Comment);
// Comment.hasMany(Comment, { foreignKey: 'id_comment', as: 'comment' });
// Employee.belongsTo(Comment, { foreignKey: 'comment_id', as: 'comment' });
Comment.belongsTo(User, { foreignKey: 'id_user', as: 'user' });
Comment.belongsTo(Task, { foreignKey: 'id_task', as: 'task' });
module.exports = Comment;
