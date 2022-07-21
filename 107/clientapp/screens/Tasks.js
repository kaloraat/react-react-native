import { useContext } from "react";
import Text from "@kaloraat/react-native-text";
import { TaskContext } from "../context/task";

export default function Tasks() {
  // context
  const [task, setTask] = useContext(TaskContext);

  return <Text>{JSON.stringify(task, null, 4)}</Text>;
}
