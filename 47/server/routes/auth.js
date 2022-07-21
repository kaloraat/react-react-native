import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";
// controllers
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from kaloraat auth API",
  });
});
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/auth-check", requireSignin, (req, res) => {
  res.json({ ok: true });
});

export default router;
