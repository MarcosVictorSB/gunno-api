const Sequelize = require('sequelize');
const database = require('./db');

const Interested = database.define(
  'Interested',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = Interested;
