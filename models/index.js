import { Sequelize } from "sequelize";
import sequelize from "../config/database.cjs";

import Task from "./task.model.cjs";
import TaskItem from "./taskItems.model.cjs";

// Associations
Task.hasMany(TaskItem, { foreignKey: "taskId", as: "items" });
TaskItem.belongsTo(Task, { foreignKey: "taskId", as: "task" });

const db = {
  sequelize,
  Sequelize,
  Task,
  TaskItem,
};

export default db;
