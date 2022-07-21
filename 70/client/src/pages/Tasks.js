import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/task";
import axios from "axios";
import CreateTask from "../components/task/CreateTask";
import TaskList from "../components/task/TaskList";
import UpdateTask from "../components/task/UpdateTask";
import socket from "../socket";

export default function Tasks() {
  // state
  const [task, setTask] = useContext(TaskContext);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    socket.on("new-task", (task) => {
      console.log("task from socket => ", task);
      setTask((prev) => ({ ...prev, tasks: [task, ...prev.tasks] }));
    });
    return () => socket.off("new-task");
  }, []);

  const loadTasks = async () => {
    try {
      const { data } = await axios.get("/tasks/1");
      // setTasks(data);
      setTask({ ...task, tasks: data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <CreateTask />
      <TaskList />
      <UpdateTask />
      {/* <pre>{JSON.stringify(task.selected, null, 4)}</pre> */}
    </>
  );
}
