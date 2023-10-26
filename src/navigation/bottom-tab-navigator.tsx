import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { RootBottomTabParamList } from "./types";
import HomeStackNavigator from "./home-stak-navigator";
import CompletedScreen from "@/screens/completed-screen";
import TodayScreen from "@/screens/today-screen";
import CatagoriesStackNavigator from "./catagories-stack-navigator";

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="CatagoriesStack" component={CatagoriesStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
