module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'ResultKeys',
      'idCustomer',
      {
        allowNull: false,
        type: Sequelize.UUID,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('ResultKeys', 'idCustomer');
  },
};
