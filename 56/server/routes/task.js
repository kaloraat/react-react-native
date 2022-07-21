import express from "express";

const router = express.Router();

// middleware
import { requireSignin, canUpdateDelete } from "../middlewares";
// controllers
const { create, tasks, update, remove } = require("../controllers/task");

router.post("/task", requireSignin, create);
router.get("/tasks", tasks);
router.put("/task/:taskId", requireSignin, canUpdateDelete, update);
router.delete("/task/:taskId", requireSignin, canUpdateDelete, remove);

export default router;
