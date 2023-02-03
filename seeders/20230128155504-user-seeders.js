"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        password: await bcrypt.hash("secret123456", 10),
        email: "john@gmail.com",
        role: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jean Dea",
        password: await bcrypt.hash("rahasia123", 10),
        email: "Jean@gmail.com",
        role: "user",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
