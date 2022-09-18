/* eslint-disable no-unused-vars */
'use strict';

const {
  CategorySchema,
  CATEGORY_TABLE,
} = require('./../models/category.model');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.drop(CATEGORY_TABLE);
    await queryInterface.drop(PRODUCT_TABLE);
  },
};
