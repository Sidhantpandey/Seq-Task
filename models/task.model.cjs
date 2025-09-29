const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.cjs");

const Task = sequelize.define(
  "Tasks",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed", "rejected"),
      defaultValue: "pending",
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    paranoid: true,
    tableName: "Tasks",
    timestamps: true,
  }
);

module.exports = Task;
