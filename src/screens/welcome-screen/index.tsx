import { Image, StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/shared/Button";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();

  const navigateToSigninScreen = () => {
    navigation.navigate("SignIn");
  };

  const navigateToSignupScreen = () => {
    navigation.navigate("SignUp");
  };

  const BLOSSOM_IMAGE =
    "https://res.cloudinary.com/dooxt2sgsdooxt2sgs23233/image/upload/v1676809769/youtube/2023/february/blossom/icon_fb36u3.png";
  return (
    <SafeAreaWrapper>
      <LinearGradient
        colors={[
          "#ffffff",
          "#fef8ff",
          "#fcecff",
          "#f8daff",
          "#fae2ff",
          "#fae2ff",
          "#fef9ff",
          "#ffffff",
        ]}
        style={{ flex: 1 }}
      >
        <Box flex={1} justifyContent="center">
          <Box alignItems="center" mb="3.5">
            <Image source={{ uri: BLOSSOM_IMAGE, width: 120, height: 120 }} />
          </Box>
          <Text textAlign="center" variant="textXl" fontWeight="700">
            Do you want to be more productive?
          </Text>
          <Box my="3.5" mx="10">
            <Button
              label="Start your journey"
              onPress={navigateToSignupScreen}
            />
          </Box>
          <Text
            textAlign="center"
            variant="textXs"
            color="gray5"
            fontWeight="700"
          >
            26,585 registered today
          </Text>
        </Box>
      </LinearGradient>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
