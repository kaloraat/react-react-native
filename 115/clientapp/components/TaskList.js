import { View, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import MasonryList from "@react-native-seoul/masonry-list";

export default function TaskList({ tasks, loading }) {
  return (
    <>
      <MasonryList
        data={tasks}
        keyExtractor={(item) => item._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "#433362",
              margin: 10,
              padding: 50,
              borderRadius: 10,
            }}
          >
            <Text color="#fff">{item?.task}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
