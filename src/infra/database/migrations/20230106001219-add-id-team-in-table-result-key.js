module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Objectives',
      'idTeam',
      {
        allowNull: false,
        type: Sequelize.UUID,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Objectives', 'idTeam');
  },
};
