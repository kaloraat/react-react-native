import { View, ImageBackground, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../components/Input";

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
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", margin: 20 }}>
          <Text title heavy center color="#fff" style={{ marginBottom: 50 }}>
            Register
          </Text>

          <Input name="NAME" />
          <Input name="EMAIL" />
          <Input name="PASSWORD" />
          <Input name="CONFIRM PASSWORD" />
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
