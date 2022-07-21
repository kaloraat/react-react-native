import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/task";
import axios from "axios";
import CreateTask from "../components/task/CreateTask";

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
      <pre>{JSON.stringify(task, null, 4)}</pre>
    </>
  );
}
