import { Button, StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();

  const navigateToSigninScreen = () => {
    navigation.navigate("SignIn");
  };

  const navigateToSignupScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Welcome Screen</Text>
        <Button title="Navigate to sign in" onPress={navigateToSigninScreen} />
        <Button title="Navigate to sign up" onPress={navigateToSignupScreen} />
      </Box>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
