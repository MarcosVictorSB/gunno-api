module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Customers',
      'deletedAt',
      {
        allowNull: true,
        type: Sequelize.DATE,
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Customers', 'deletedAt');
  },
};
