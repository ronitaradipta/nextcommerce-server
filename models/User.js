module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address_one: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      address_two: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      provinces_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      regencies_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      zip_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      store_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      store_address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      store_status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "user"],
        allowNull: false,
        defaultValue: "user",
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );
  return User;
};
