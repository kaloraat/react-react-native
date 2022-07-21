import { useContext, useState, useEffect } from "react";
import { Modal } from "antd";
import { TaskContext } from "../../context/task";

export default function UpdateTask() {
  // context
  const [task, setTask] = useContext(TaskContext);
  // state
  const [content, setContent] = useState("");

  useEffect(() => {
    if (task) setContent(task?.selected?.task);
  }, [task]);

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      console.log("udpate => ", task?.selected?.task);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      console.log("delete => ", task?.selected?.task);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal
        centered
        title="This is modal"
        visible={task?.selected !== null}
        // onOk={() => setTask({ ...task, selected: null })}
        onCancel={() => setTask({ ...task, selected: null })}
        footer={null}
      >
        <form className="d-flex justify-content">
          <textarea
            maxLength="160"
            className="form-control m-1"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write something.."
          />
          <button onClick={handleUpdate} className="btn btn-primary m-1">
            Update
          </button>
          <button onClick={handleDelete} className="btn btn-danger m-1">
            Delete
          </button>
        </form>
      </Modal>
    </>
  );
}
