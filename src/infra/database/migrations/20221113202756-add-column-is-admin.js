module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Customers',
      'admin',
      {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Customers', 'admin');
  },
};
