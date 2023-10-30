import { StyleSheet, TextInput, TextInputProps } from "react-native";
import React from "react";
import theme, { Box, Text } from "@/utils/theme";

type InputProps = {
  label: string;

  error?: undefined;
} & TextInputProps;

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <Box flexDirection="column" mb="6">
      <Text variant="textXs" textTransform="uppercase" mb="3.5">
        {label}
      </Text>
      <TextInput
        style={{
          padding: 16,
          borderWidth: 1,
          borderColor: theme.colors.grey,
          borderRadius: theme.borderRadii["rounded-7xl"],
        }}
        {...props}
      />
    </Box>
  );
};

export default Input;

const styles = StyleSheet.create({});
