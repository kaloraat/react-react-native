import { useContext } from "react";
import { View } from "react-native";
import Text from "@kaloraat/react-native-text";
import { AuthContext } from "../context/auth";

export default function Home() {
  // context
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <View>
      <Text>Home screen</Text>
      <Text>{JSON.stringify(auth, null, 4)}</Text>
    </View>
  );
}
