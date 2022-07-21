import { useState, useContext } from "react";
import { View, ImageBackground } from "react-native";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { AuthContext } from "../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signin({ navigation }) {
  // context
  const [auth, setAuth] = useContext(AuthContext);
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
      const { data } = await axios.post("/signup", {
        name,
        email,
        password,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        // console.log("REGISTER RES => ", data);
        // save user and token to context
        setAuth(data);
        // save user and token to async storage
        await AsyncStorage.setItem("@auth", JSON.stringify(data));
        alert("Registration successful");
        setLoading(false);
        navigation.navigate("Home");
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
            Login
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

          <Text small center style={{ color: "#fff", marginTop: 10 }}>
            Don't have an account?{" "}
            <Text
              onPress={() => navigation.navigate("Signup")}
              style={{ color: "#fff" }}
            >
              Register
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
