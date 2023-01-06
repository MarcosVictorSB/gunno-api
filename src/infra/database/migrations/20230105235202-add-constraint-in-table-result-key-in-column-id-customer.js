module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint(
      'ResultKeys',
      {
        fields: ['idCustomer'],
        type: 'foreign key',
        name: 'resultkey_customer_association',
        references: {
          table: 'Customers',
          field: 'id',
        },
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'ResultKeys',
      {
        fields: ['idCustomer'],
        type: 'foreign key',
        name: 'resultkey_customer_association',
        references: {
          table: 'Customers',
          field: 'id',
        },
      },
    );
  },
};
