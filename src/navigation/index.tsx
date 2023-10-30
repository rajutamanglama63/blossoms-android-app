import { AuthContext } from "@/context/auth-context";
import { Box } from "@/utils/theme";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import AppStackNavigator from "./app-stack-navigator";
import AuthStackNavigator from "./auth-stack-navigator";

const Navigation = () => {
  const authContext = useContext(AuthContext);

  if (authContext?.loading) {
    return (
      <Box flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator size={"large"} />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {authContext?.token !== "" ? (
        <AppStackNavigator />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
