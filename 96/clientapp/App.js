import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Signup from "./screens/Signup";
import { AuthProvider } from "./context/auth";

export default function App() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
}
