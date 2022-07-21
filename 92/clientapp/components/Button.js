import { TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";

export default function Button({ title }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#433362",
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 24,
      }}
    >
      <Text bold medium center color="#fff">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
