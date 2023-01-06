module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint(
      'Objectives',
      {
        fields: ['idTeam'],
        type: 'foreign key',
        name: 'objective_team_association',
        references: {
          table: 'Teams',
          field: 'id',
        },
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'Objectives',
      {
        fields: ['idTeam'],
        type: 'foreign key',
        name: 'objective_team_association',
        references: {
          table: 'Teams',
          field: 'id',
        },
      },
    );
  },
};
