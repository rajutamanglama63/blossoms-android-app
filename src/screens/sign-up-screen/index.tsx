import { Button, StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSigninScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaWrapper>
      <Box px="5.5" mt={"13"} flex={1}>
        <Text variant="textXl" fontWeight="700">
          Welcome to Blossoms!
        </Text>
        <Text variant="textXl" fontWeight="700">
          Your journey start here
        </Text>
        <Button title="Navigate to signup" onPress={navigateToSigninScreen} />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
