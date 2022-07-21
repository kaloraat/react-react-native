import { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import MasonryList from "@react-native-seoul/masonry-list";
import { AuthContext } from "../context/auth";
import { TaskContext } from "../context/task";
import { useNavigation } from "@react-navigation/native";

export default function TaskList({ tasks, loading }) {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  const [task, setTask] = useContext(TaskContext);
  // hooks
  const navigation = useNavigation();

  const owner = (item) => auth?.user?._id === item?.postedBy?._id;

  const handlePress = (item) => {
    if (!owner(item)) return;
    setTask({ ...task, selected: item });
    navigation.navigate("TaskEdit");
  };

  return (
    <>
      <MasonryList
        data={tasks}
        keyExtractor={(item) => item._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item)}
            style={{
              backgroundColor: owner(item) ? "#66ff66" : "#433362",
              margin: 10,
              padding: 50,
              borderRadius: 24,
            }}
          >
            <Text color={owner(item) ? "#000" : "#fff"}>{item?.task}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
