import { StyleSheet, Text } from "react-native";
import React from "react";
import { Box } from "@/utils/theme";

const Button = () => {
  return (
    <Box bg="blu200" p="4" borderRadius="rounded-3xl">
      <Text>Button to press</Text>
    </Box>
  );
};

export default Button;

const styles = StyleSheet.create({});
