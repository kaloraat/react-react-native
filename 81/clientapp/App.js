import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Welcome from "./components/Welcome";
import { WebView } from "react-native-webview";

// export default function App() {
//   const names = ["Ryan", "Zen", "David"];
//   return (
//     <View style={styles.container}>
//       <Text>REACT APP</Text>

//       {names.map((name) => (
//         <Welcome key={name} name={name} />
//       ))}

//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <WebView
      source={{ uri: "https://codecontinue.com" }}
      style={{ marginTop: 50 }}
    />
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
