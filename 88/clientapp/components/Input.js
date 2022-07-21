import { TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";

export default function Input({ name }) {
  return (
    <>
      <Text color="#fff">{name}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize="words"
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "#8e93a1",
          marginBottom: 30,
          color: "#fff",
        }}
      />
    </>
  );
}
