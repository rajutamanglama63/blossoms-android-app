import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";

type CategoryProps = {
  category: ICategory;
};

const Catagory = ({ category }: CategoryProps) => {
  return (
    <Box bg="lightGray" p="4" borderRadius="rounded-5xl">
      <Box flexDirection="row">
        <Text variant="textBase" fontWeight="600" mr="3">
          {category.icon !== null ? category.icon.symbol : "🌱"}
        </Text>
        <Text variant="textBase" fontWeight="600">
          {category.name}
        </Text>
      </Box>
    </Box>
  );
};

export default Catagory;

const styles = StyleSheet.create({});
