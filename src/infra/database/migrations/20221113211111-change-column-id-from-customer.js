module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'Customers',
      'id',
      {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'Customers',
      'id',
      {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    );
  },
};
