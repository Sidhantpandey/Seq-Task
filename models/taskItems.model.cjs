const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.cjs");
const Task = require("./task.model.cjs");

const TaskItem = sequelize.define(
  "TaskItems",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    taskId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Task,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed", "rejected"),
      defaultValue: "pending",
      allowNull: false,
    },
  },
  {
    paranoid: true,
    tableName: "TaskItems",
    timestamps: true,
  }
);

module.exports = TaskItem;
