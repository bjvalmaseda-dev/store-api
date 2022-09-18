/* eslint-disable no-unused-vars */
'use strict';

const { OrderSchema, ORDER_TABLE } = require('./../models/order.model');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.drop(ORDER_TABLE);
  },
};
