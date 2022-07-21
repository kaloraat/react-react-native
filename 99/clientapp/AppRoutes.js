import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "./context/auth";

import Signup from "./screens/Signup";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  const authenticated = auth?.token !== "" && auth?.user !== null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        {authenticated ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTitle: "Tasker",
                headerRight: () => (
                  <Button
                    title="Info"
                    onPress={() => alert("This is a button")}
                    color="#333"
                  />
                ),
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
