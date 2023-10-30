import Loader from "@/components/shared/loader";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { CatagoriesContext } from "@/context/categories-context";
import { Box, Text } from "@/utils/theme";
import React, { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";

const CatagoriesScreen = () => {
  const categoriesContext = useContext(CatagoriesContext);

  if (categoriesContext?.loading) {
    return <Loader />;
  }

  const renderItem = ({ item }: { item: ICategory }) => (
    <Box bg="lightGray" p="4" borderRadius="rounded-5xl">
      <Text>{item.name}</Text>
    </Box>
  );
  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4">
        <Text fontWeight="700" variant="textXl" mb="10">
          Catagories
        </Text>

        <FlatList
          data={categoriesContext?.categoriesData}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Box height={14} />}
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default CatagoriesScreen;

const styles = StyleSheet.create({});
