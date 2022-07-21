import express from "express";

const router = express.Router();

// middleware
import { requireSignin, canUpdateDelete } from "../middlewares";
// controllers
const {
  create,
  tasks,
  update,
  remove,
  taskCount,
} = require("../controllers/task");

router.post("/task", requireSignin, create);
router.get("/tasks/:page", tasks);
router.put("/task/:taskId", requireSignin, canUpdateDelete, update);
router.delete("/task/:taskId", requireSignin, canUpdateDelete, remove);
router.get("/task-count", taskCount);

export default router;
