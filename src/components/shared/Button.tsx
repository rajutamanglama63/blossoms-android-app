import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";

type ButtonProps = {
  label: string;
  onLongPress?: () => void;
  onPress: () => void;
  disabled?: boolean;
};

const Button = ({ label, onLongPress, onPress, disabled }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <Box
        bg={disabled ? "gray800" : "primary"}
        py="3.5"
        borderRadius="rounded-7xl"
      >
        <Text
          variant="textXs"
          fontWeight="700"
          color="white"
          textAlign="center"
        >
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
