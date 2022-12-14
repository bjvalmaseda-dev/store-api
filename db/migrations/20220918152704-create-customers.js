/* eslint-disable no-unused-vars */
'use strict';

const {
  CustomerSchema,
  CUSTOMER_TABLE,
} = require('./../models/custumer.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.drop(CUSTOMER_TABLE);
  },
};
