import CatagoriesScreen from "@/screens/catagories-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { CatagoriesStackParamList } from "./types";
import CatagoryScreen from "@/screens/catagory-screen";

const Stack = createNativeStackNavigator<CatagoriesStackParamList>();

const CatagoriesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Catagories"
        component={CatagoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Catagory"
        component={CatagoryScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CatagoriesStackNavigator;

const styles = StyleSheet.create({});
