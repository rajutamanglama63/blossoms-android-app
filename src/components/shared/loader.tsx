import { ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";
import SafeAreaWrapper from "./safe-area-wrapper";

const Loader = () => {
  return (
    <SafeAreaWrapper>
      <Box flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Box>
    </SafeAreaWrapper>
  );
};

export default Loader;

const styles = StyleSheet.create({});
