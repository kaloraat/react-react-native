import { useState } from "react";
import { View, ImageBackground } from "react-native";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Signup() {
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

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

          <Input
            name="NAME"
            value={name}
            setValue={setName}
            autoCapitalize="words"
          />
          <Input
            name="EMAIL"
            value={email}
            setValue={setEmail}
            autoCompleteType="email"
            keyboardType="email-address"
          />
          <Input
            name="PASSWORD"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            autoCompleteType="password"
          />
          <Input
            name="CONFIRM PASSWORD"
            value={confirm}
            setValue={setConfirm}
            secureTextEntry={true}
            autoCompleteType="password"
          />

          <Button title="Submit" />
        </View>

        <Text color="#fff">
          {JSON.stringify({ name, email, password, confirm }, null, 4)}
        </Text>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
