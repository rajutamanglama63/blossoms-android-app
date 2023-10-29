import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import Input from "@/components/shared/input";
import Button from "@/components/shared/Button";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignupScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaWrapper>
      <Box px="5.5" flex={1} justifyContent="center">
        <Text variant="textXl" fontWeight="700">
          Welcome Back
        </Text>

        <Box mb="6" />
        <Input label="E-mail" />
        <Box mb="2" />
        <Input label="Password" />
        {/* <Box mt="5.5" /> */}

        <Pressable onPress={navigateToSignupScreen}>
          <Text color="primary" textAlign="right">
            Register?
          </Text>
        </Pressable>
        <Box mb="5.5" />

        <Button label="Login" onPress={navigateToSignupScreen} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
