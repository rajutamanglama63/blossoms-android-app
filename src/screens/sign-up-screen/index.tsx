import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import Input from "@/components/shared/input";
import Button from "@/components/shared/Button";

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
        <Text variant="textXl" fontWeight="700" mb="6">
          Your journey start here
        </Text>

        <Input label="Name" />
        <Box mb="2" />
        <Input label="E-mail" />
        <Box mb="2" />
        <Input label="Password" />
        {/* <Box mt="5.5" /> */}

        <Pressable onPress={navigateToSigninScreen}>
          <Text color="primary" textAlign="right">
            Log in?
          </Text>
        </Pressable>
        <Box mb="5.5" />

        <Button label="Register" onPress={navigateToSigninScreen} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
