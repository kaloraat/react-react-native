import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";
// controllers
const { create } = require("../controllers/task");

router.post("/task", requireSignin, create);

export default router;
