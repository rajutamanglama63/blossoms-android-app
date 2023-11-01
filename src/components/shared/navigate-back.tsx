import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import { Box, Theme } from "@/utils/theme";
import { Ionicons } from "@expo/vector-icons";

const NavigateBack = () => {
  const navigation = useNavigation();
  const theme = useTheme<Theme>();

  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <Pressable onPress={navigateBack}>
      <Box bg="gray100" p="2" borderRadius="rounded-7xl">
        <Ionicons name="chevron-back" size={24} color={theme.colors.gray9} />
      </Box>
    </Pressable>
  );
};

export default NavigateBack;

const styles = StyleSheet.create({});
