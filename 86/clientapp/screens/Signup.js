import { View, ImageBackground } from "react-native";
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
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text title heavy center color="#fff">
          Register
        </Text>
      </View>
    </ImageBackground>
  );
}
