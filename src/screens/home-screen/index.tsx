import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/theme";
import React from "react";
import { StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>HomeScreen</Text>
      </Box>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
