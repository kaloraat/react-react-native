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
import Tasks from "./screens/Tasks";
import Add from "./screens/Add";
import TaskEdit from "./screens/TaskEdit";

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

  const Home = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 100 },
          headerRight: () => (
            <Feather
              name="log-out"
              onPress={logout}
              size={16}
              style={{ marginHorizontal: 10 }}
            />
          ),
        }}
      >
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text style={{ color: focused ? "#433362" : color }}>Tasks</Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name={focused ? "database" : "minimize"}
                size={size}
                color={focused ? "#433362" : color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text style={{ color: focused ? "#433362" : color }}>Add</Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name={focused ? "plus-circle" : "minimize"}
                size={size}
                color={focused ? "#433362" : color}
              />
            ),
          }}
        />
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
            <Tab.Screen
              name="TaskEdit"
              component={TaskEdit}
              options={{ title: "Task Edit" }}
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
