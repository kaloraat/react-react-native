import { useState } from "react";
import axios from "axios";

export default function Tasks() {
  // state
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/task", { content });
      console.log("task created", data);
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
    </>
  );
}
