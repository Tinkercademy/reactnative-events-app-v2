import * as React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import ContactScreen from "./screens/ContactScreen";
import TabBarIcon from "./components/TabBarIcon";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-airplane" : "md-airplane"}
    />
  ),
};

export default createAppContainer(
  createBottomTabNavigator({
    Home: HomeStack,
    Events: EventsScreen,
    Contact: ContactScreen,
  })
);
