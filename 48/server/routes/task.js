import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";
// controllers
const { create, tasks } = require("../controllers/task");

router.post("/task", requireSignin, create);
router.get("/tasks", tasks);

export default router;
