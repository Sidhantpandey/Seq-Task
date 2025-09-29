import express from "express";
import db from "../models/index.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const { sequelize, Task, TaskItem } = db;

export const taskCreate = asyncHandler(async (req, res, next) => {
  const { task, taskItems } = req.body;

  if (!task || !taskItems || taskItems.length === 0) {
    return next(new ApiError(400, "Please enter all the fields"));
  }

  const tx = await sequelize.transaction();

  try {
    const createdTask = await Task.create(task, { transaction: tx });

    const items = taskItems.map((item) => ({
      ...item,
      taskId: createdTask.id,
    }));

    await TaskItem.bulkCreate(items, { transaction: tx });

    await tx.commit();
    return res
      .status(201)
      .json({ success: true, message: "Records Saved Successfully" });
  } catch (error) {
    await tx.rollback();
    console.error(error);
    return next(new ApiError(500, "Internal Server Error"));
  }
});

export const getAllTasksWithItems = asyncHandler(async (req, res) => {
  const tasks = await Task.findAll({
    include: [
      {
        model: TaskItem,
        as: "items",
      },
    ],
  });

  if (!tasks || tasks.length === 0) {
    throw new ApiError(404, "No tasks found");
  }

  return res.status(200).json({
    success: true,
    data: tasks,
    message: "Data fetched successfully",
  });
});
