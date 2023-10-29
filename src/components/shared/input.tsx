import { StyleSheet, TextInput } from "react-native";
import React from "react";
import theme, { Box, Text } from "@/utils/theme";

type InputProps = {
  label: string;
  error?: undefined;
};

const Input = ({ label }: InputProps) => {
  return (
    <Box flexDirection="column" mb="6">
      <Text variant="textXs" textTransform="uppercase" mb="3.5">
        {label}
      </Text>
      <TextInput
        style={{
          paddingVertical: 16,
          borderWidth: 1,
          borderColor: theme.colors.grey,
          borderRadius: theme.borderRadii["rounded-7xl"],
        }}
      />
    </Box>
  );
};

export default Input;

const styles = StyleSheet.create({});
