import express from "express"
import * as taskController from "./task.controller.js";

const router = express.Router();


router.post("/", taskController.createTask);


router.get("/", taskController.getTask);


router.get("/:id", taskController.getTaskById);


router.put("/:id", taskController.updateTask);


router.delete("/:id", taskController.deleteTask);

export default router