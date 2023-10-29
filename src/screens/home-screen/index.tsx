import Button from "@/components/shared/Button";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { AuthContext } from "@/context/auth-context";
import { Box, Text } from "@/utils/theme";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";

const HomeScreen = () => {
  const authContext = useContext(AuthContext);

  return (
    <SafeAreaWrapper>
      <Box mb="3.5">
        <Text>HomeScreen</Text>
      </Box>
      <Box px="5.5">
        <Button
          label="logout"
          onPress={() => authContext?.logout()}
          uppercase
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
