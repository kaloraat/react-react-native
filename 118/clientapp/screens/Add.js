import { useState, useContext } from "react";
import { View, ImageBackground } from "react-native";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
// import { AuthContext } from "../context/auth";
import { TaskContext } from "../context/task";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Add({ navigation }) {
  // context
  const [task, setTask] = useContext(TaskContext);
  // state
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/task", {
        content,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        // save task to context
        setTask({ ...task, tasks: [data, ...task.tasks] });
        alert("Task created");
        setContent("");
        setLoading(false);
        navigation.navigate("Tasks");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
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
          NEW TASK
        </Text>

        <Input
          name="Write something"
          value={content}
          setValue={setContent}
          color="#333"
        />

        <Button title="Submit" loading={loading} handleSubmit={handleSubmit} />
      </View>
    </KeyboardAwareScrollView>
  );
}
