import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Welcome = ({ name }) => {
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>REACT APP</Text>
      <Welcome name="Ryan" />
      <Welcome name="Zen" />
      <Welcome name="David" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
