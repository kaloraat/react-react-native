import { useState } from "react";
import { View, ImageBackground } from "react-native";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

export default function Signup() {
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (password !== confirm) {
        alert("Passwords do not match");
        return;
      }
      setLoading(true);
      const { data } = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        alert("Registration successful");
        setLoading(false);
        console.log("REGISTER RES => ", data);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

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
            keyboardType="email-address"
          />
          <Input
            name="PASSWORD"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <Input
            name="CONFIRM PASSWORD"
            value={confirm}
            setValue={setConfirm}
            secureTextEntry={true}
          />

          <Button
            title="Submit"
            loading={loading}
            handleSubmit={handleSubmit}
          />
        </View>

        <Text color="#fff">
          {JSON.stringify({ name, email, password, confirm }, null, 4)}
        </Text>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
