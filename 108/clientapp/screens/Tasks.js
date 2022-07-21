import { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Text from "@kaloraat/react-native-text";
import { TaskContext } from "../context/task";
import axios from "axios";
import Button from "../components/Button";

export default function Tasks() {
  // context
  const [task, setTask] = useContext(TaskContext);
  // state
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTasks();
    getTotal();
  }, []);

  const loadTasks = async () => {
    try {
      const { data } = await axios.get(`/tasks/${page}`);
      setTask({ ...task, tasks: data });
    } catch (err) {
      console.log(err);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/task-count");
      setTotal(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text>{task?.tasks?.length}</Text>
      <Text>{JSON.stringify(task, null, 4)}</Text>
      <View>
        <Button
          title="Load more"
          disabled={loading}
          handleSubmit={() => setPage(page + 1)}
        />
      </View>
    </ScrollView>
  );
}
