import jwt from "jsonwebtoken";
import Task from "../models/task";

export const requireSignin = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json(err);
  }
};

export const canUpdateDelete = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (task.postedBy._id.toString() !== req.user._id.toString()) {
      return res.status(400).send("Unauthorized");
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
