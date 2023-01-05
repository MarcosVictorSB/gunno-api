const Sequelize = require('sequelize');
const database = require('../../../infra/database/conection/db-connection');

const ResultKeys = database.define(
  'ResultKeys',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    initialValue: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    valueTarget: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    valueCurrent: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  },
  {
    paranoid: true,
  },
);

module.exports = ResultKeys;
