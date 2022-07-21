import { useContext } from "react";
import { TaskContext } from "../../context/task";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function TaskList() {
  // context
  const [task, setTask] = useContext(TaskContext);

  const handleClick = (item) => {
    setTask({ ...task, selected: item });
  };

  return (
    <div className="contaienr mt-2">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {task?.tasks?.map((task) => (
            <div
              key={task._id}
              className="bg-light rounded shadow p-2 m-2 tasklist"
              onClick={() => handleClick(task)}
            >
              <p>{task.task}</p>
              <p
                className="float-end"
                style={{ fontSize: "8px", marginTop: "-15px" }}
              >
                {dayjs(task.createdAt).fromNow()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
