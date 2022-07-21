import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/task";
import axios from "axios";
import CreateTask from "../components/task/CreateTask";
import TaskList from "../components/task/TaskList";

export default function Tasks() {
  // state
  const [task, setTask] = useContext(TaskContext);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const { data } = await axios.get("/tasks");
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
      <pre>{JSON.stringify(task.selected, null, 4)}</pre>
    </>
  );
}
