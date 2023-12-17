import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import Discussion from "../components/Discussion";
import User from "../components/User";

const Tab = createBottomTabNavigator();

function TabNav() {
  const [focus, setFocused] = useState(false);
  const [mfocus, setMfocus] = useState(false);
  const [name, setna] = useState();
  const tabBarIcon = () => {
    const iconColor = focus.focused ? "blue" : "gray";
    if (name == "home") return <Icon name="home" size={30} color={iconColor} />;
  };
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: tabBarIcon,
        }}
      />
      <Tab.Screen
        name="Discussion"
        component={Discussion}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNav;
