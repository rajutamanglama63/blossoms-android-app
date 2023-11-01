import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text, Theme } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { CategoriesNavigationType } from "@/navigation/types";
import { useTheme } from "@shopify/restyle";
import { Feather } from "@expo/vector-icons";

const CreateNewList = () => {
  const navigation = useNavigation<CategoriesNavigationType>();
  const theme = useTheme<Theme>();

  const navigateToCreateCategory = () => {
    navigation.navigate("CreateCatagory", {});
  };
  return (
    <Pressable onPress={navigateToCreateCategory}>
      <Box
        p="4"
        bg="lightGray"
        borderRadius="rounded-5xl"
        flexDirection="row"
        alignItems="center"
        mb="3"
      >
        <Feather name="plus" size={24} color={theme.colors.gray500} />
        <Text variant="textXl" fontWeight="600" color="gray650" ml="3">
          Create new list
        </Text>
      </Box>
    </Pressable>
  );
};

export default CreateNewList;

const styles = StyleSheet.create({});
