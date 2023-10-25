import { Button, StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignupScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Box>
      <Text>Sign in screen</Text>
      <Button title="Navigate to signup" onPress={navigateToSignupScreen} />
    </Box>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
