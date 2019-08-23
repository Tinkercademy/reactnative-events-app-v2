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
import NextScreen from "./screens/NextScreen";
import TabBarIcon from "./components/TabBarIcon";
import Colors from "./constants/Colors";

function getNavigationOptions(title) {
  return {
    title: title,
    headerStyle: {
      backgroundColor: Colors.tintColor,
    },
    headerTintColor: "white",
  };
}

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: getNavigationOptions("Home"),
  },
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
  Events: {
    screen: EventsScreen,
    navigationOptions: getNavigationOptions("Events"),
  },
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
  Contact: {
    screen: ContactScreen,
    navigationOptions: getNavigationOptions("Contact"),
  },
  Next: NextScreen,
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
