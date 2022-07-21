import { useContext, useEffect, useState } from "react";
import { ScrollView, View, Image } from "react-native";
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

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/tasks/${page}`);
      setTask({ ...task, tasks: data });
      setLoading(false);
    } catch (err) {
      setLoading(false);
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

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/tasks/${page}`);
      setTask({ ...task, tasks: [...task.tasks, ...data] });
      // delay the loading false
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/loading.gif")}
          style={{ height: 200, width: 200 }}
        />
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text>{task?.tasks?.length}</Text>
      <Text>{JSON.stringify(task, null, 4)}</Text>
      <View style={{ margin: 10 }}>
        <Button
          title="Load more"
          disabled={loading}
          handleSubmit={() => setPage(page + 1)}
        />
      </View>
    </ScrollView>
  );
}
