/* eslint-disable no-unused-vars */
'use strict';

const {
  OrderProductSchema,
  ORDER_PRODUCT_TABLE,
} = require('./../models/order-products.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.drop(ORDER_PRODUCT_TABLE);
  },
};
