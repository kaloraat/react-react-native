import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/task";
import axios from "axios";

export default function Tasks() {
  // state
  const [content, setContent] = useState("");
  // const [tasks, setTasks] = useState([]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/task", { content });
      // console.log("task created", data);
      //   setTasks([data, ...tasks]);
      setTask({ ...task, tasks: [data, task.tasks] });
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="d-flex justify-content" onSubmit={handleSubmit}>
        <textarea
          maxLength="160"
          className="form-control m-1"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something.."
        />
        <button type="submit" className="btn btn-primary m-1">
          Submit
        </button>
      </form>
      <pre>{JSON.stringify(task, null, 4)}</pre>
    </>
  );
}
