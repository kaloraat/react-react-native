import { useState, useContext, useEffect } from "react";
import { View, ImageBackground } from "react-native";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
// import { AuthContext } from "../context/auth";
import { TaskContext } from "../context/task";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TaskEdit({ navigation }) {
  // context
  const [task, setTask] = useContext(TaskContext);
  // state
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (task) setContent(task?.selected?.task);
  }, [task]);

  const handleSubmit = async () => {
    if (!content) {
      alert("Please write something");
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.put(`/task/${task?.selected?._id}`, {
        task: content,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        // save task to context
        const newList = task.tasks.map((t) => {
          if (t._id == data._id) {
            return data;
          }
          return t;
        });

        setTask({ ...task, tasks: newList });
        alert("Task updated");
        // setContent("");
        // setLoading(false);
        navigation.goBack();
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/task/${task?.selected?._id}`);
      setTask({ ...task, tasks: task.tasks.filter((t) => t._id !== data._id) });
      alert("Task deleted");
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", margin: 20 }}>
        <Text title heavy center style={{ marginBottom: 50 }}>
          EDIT TASK
        </Text>

        <Input
          name="Make some changes"
          value={content}
          setValue={setContent}
          color="#333"
        />

        <Button title="Submit" loading={loading} handleSubmit={handleSubmit} />
        <Text style={{ marginVerticle: 10 }}></Text>
        <Button
          title="Delete"
          loading={loading}
          handleSubmit={handleDelete}
          color="#ff4d4d"
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
