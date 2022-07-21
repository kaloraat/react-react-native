import { View, ImageBackground, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";

export default function Signup() {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../assets/fractal.jpeg")}
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", margin: 20 }}>
        <Text title heavy center color="#fff" style={{ marginBottom: 50 }}>
          Register
        </Text>

        <Text color="#fff">NAME</Text>
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
      </View>
    </ImageBackground>
  );
}
