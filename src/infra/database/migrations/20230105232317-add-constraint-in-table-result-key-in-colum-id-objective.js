module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint(
      'ResultKeys',
      {
        fields: ['idObjective'],
        type: 'foreign key',
        name: 'resultkey_objective_association',
        references: {
          table: 'Objectives',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'ResultKeys',
      {
        fields: ['idObjective'],
        type: 'foreign key',
        name: 'resultkey_objective_association',
        references: {
          table: 'Objectives',
          field: 'id',
        },
      },
    );
  },
};
