/* eslint-disable no-unused-vars */
'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.drop(USER_TABLE);
  },
};
