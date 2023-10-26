import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { HomeStackParamList } from "./types";
import HomeScreen from "@/screens/home-screen";
import EditTaskScreen from "@/screens/edit-task-screen";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTaskScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
