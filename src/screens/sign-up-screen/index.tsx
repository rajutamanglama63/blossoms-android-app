import { Button, StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSigninScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <Box>
      <Text>Sign up screen</Text>
      <Button title="Navigate to signup" onPress={navigateToSigninScreen} />
    </Box>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
