import { useState, createContext } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [task, setTask] = useState({
    tasks: [],
    selected: null,
  });

  return (
    <TaskContext.Provider value={[task, setTask]}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
