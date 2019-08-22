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
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  ),
};

const EventsStack = createStackNavigator({
  Events: EventsScreen,
});

EventsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list-box" : "md-list-box"}
    />
  ),
};

const ContactStack = createStackNavigator({
  Contact: ContactScreen,
});

ContactStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-map" : "md-map"}
    />
  ),
};

export default createAppContainer(
  createBottomTabNavigator({
    Home: HomeStack,
    Events: EventsStack,
    Contact: ContactStack,
  })
);
