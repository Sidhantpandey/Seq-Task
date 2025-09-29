import express from "express"
import * as taskController from "../controllers/task.controller.js"

const router= express.Router()

router.route("/create").post(taskController.taskCreate);
router.route("/getData").post(taskController.getAllTasksWithItems);

export default router;