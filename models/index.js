import sequelize from "sequelize";
import { Sequelize } from "../config/database.cjs";

// 1 : m
Task.hasMany(TaskItem, { foreignKey: "taskId", as: "items" });
TaskItem.belongsTo(Task, { foreignKey: "taskId", as: "task" });

const db = {
  sequelize,
  Sequelize,
  Task,
  TaskItem,
};

export default db;
