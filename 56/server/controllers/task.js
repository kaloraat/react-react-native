import Task from "../models/task";

export const create = async (req, res) => {
  try {
    // console.log(req.body);
    const task = await new Task({
      task: req.body.content,
      postedBy: req.user._id,
    }).save();
    const data = await Task.findById(task._id).populate("postedBy", "name");
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

export const tasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("postedBy", "name")
      .sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.log(err);
  }
};

export const update = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
      new: true,
    }).populate("postedBy", "name");
    res.json(task);
  } catch (err) {
    console.log(err);
  }
};

export const remove = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.taskId);
    res.json(task);
  } catch (err) {
    console.log(err);
  }
};