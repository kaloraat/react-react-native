import { TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";

export default function Input({
  name,
  value,
  setValue,
  autoCapitalize = "none",
  autoCorrect = false,
  secureTextEntry = false,
  multiline = false,
  keyboardType = "default",
}) {
  return (
    <>
      <Text color="#fff">{name}</Text>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
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
