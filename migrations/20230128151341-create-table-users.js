"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address_one: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      address_two: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      provinces_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      regencies_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      zip_code: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      store_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      store_address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      store_status: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      role: {
        type: Sequelize.ENUM,
        values: ["admin", "user"],
        defaultValue: "user",
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint("users", {
      type: "unique",
      fields: ["email"],
      name: "UNIQUE_USER_EMAIL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
