import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
import { Title } from "react-native-paper";
import TabNav from "./Tab";
import Details from "../components/Details";

const Stack = createStackNavigator();

export default StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Create Your Profile" component={SignUp} />
      <Stack.Screen name="CampusConnect" component={TabNav} />
      <Stack.Screen name="Faculty Profile" component={Details} />
    </Stack.Navigator>
  );
};
