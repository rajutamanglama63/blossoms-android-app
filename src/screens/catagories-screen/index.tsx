import Catagory from "@/components/categories/category";
import CreateNewList from "@/components/categories/create-new-list";
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
    <Catagory category={item} />
  );
  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4">
        <Text fontWeight="700" variant="textXl" mb="10">
          Catagories
        </Text>

        <FlatList
          data={categoriesContext?.categoriesData}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Box height={14} />}
          keyExtractor={(item) => JSON.stringify(item.id)}
        />
        <CreateNewList />
      </Box>
    </SafeAreaWrapper>
  );
};

export default CatagoriesScreen;

const styles = StyleSheet.create({});
