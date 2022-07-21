import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "./context/auth";
import Feather from "react-native-vector-icons/Feather";
// IMPORT WITHOUT {}
import AsyncStorage from "@react-native-async-storage/async-storage";

import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
// import Home from "./screens/Home";
import ForgotPassword from "./screens/ForgotPassword";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  const authenticated = auth?.token !== "" && auth?.user !== null;

  const logout = async () => {
    setAuth({ user: null, token: "" });
    await AsyncStorage.removeItem("@auth");
  };

  const Tasks = () => {
    return <Text>Tasks</Text>;
  };

  const Add = () => {
    return <Text>Add</Text>;
  };

  const Home = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Tasks" component={Tasks} />
        <Tab.Screen name="Add" component={Add} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        {authenticated ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                // headerTitle: "Tasker",
                headerRight: () => (
                  <Feather name="log-out" onPress={logout} size={16} />
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
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
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
