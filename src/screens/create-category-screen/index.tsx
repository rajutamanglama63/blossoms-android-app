import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text, Theme } from "@/utils/theme";
import NavigateBack from "@/components/shared/navigate-back";
import { useTheme } from "@shopify/restyle";
import { getColors, getIcons } from "@/utils/helpers";
import Button from "@/components/shared/Button";

const CreateCategoryScreen = () => {
  const theme = useTheme<Theme>();

  const COLORS = getColors();
  const ICONS = getIcons();

  const DEFAULT_COLORS = COLORS[0];
  const DEFAULT_ICONS = ICONS[0];

  const [newCategory, setNewCategory] = useState<
    Omit<ICategory, "id" | "user" | "isEditable">
  >({
    name: "",
    color: DEFAULT_COLORS,
    icon: DEFAULT_ICONS,
  });

  const createNewCategory = async () => {
    console.log(`newCategory`, JSON.stringify(newCategory, null, 2));
    try {
    } catch (error) {
      console.error("error in createNewCategory: ", error);
    }
  };

  const updateColor = (color: IColor) => {
    setNewCategory((prev) => {
      return {
        ...prev,
        color,
      };
    });
  };

  const updateIcon = (icon: IIcon) => {
    setNewCategory((prev) => {
      return {
        ...prev,
        icon,
      };
    });
  };
  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box height={16} />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <NavigateBack />
        </Box>
        <Box height={16} />
        <Box bg="gray250" borderRadius="rounded-2xl">
          <TextInput
            style={{ padding: 16, lineHeight: 26, fontSize: 20 }}
            placeholder="Create new list"
            maxLength={36}
            placeholderTextColor={theme.colors.gray5}
            value={newCategory.name}
            onChangeText={(text) => {
              setNewCategory((prev) => {
                return {
                  ...prev,
                  name: text,
                };
              });
            }}
          />
        </Box>

        <Box height={24} />

        <Box bg="gray250" p="4" borderRadius="rounded-2xl">
          <Box
            bg="white"
            width={80}
            p="2"
            mb="4"
            alignItems="center"
            borderRadius="rounded-2xl"
          >
            <Text
              color={newCategory.color.name as any}
              variant="textBase"
              fontWeight="600"
            >
              Colors
            </Text>
          </Box>
          <Box justifyContent="space-evenly" flexDirection="row">
            {COLORS.map((_color) => {
              return (
                <Pressable key={_color.id} onPress={() => updateColor(_color)}>
                  <Box
                    style={{ backgroundColor: _color.code }}
                    width={24}
                    height={24}
                    borderRadius="rounded-2xl"
                  ></Box>
                </Pressable>
              );
            })}
          </Box>
        </Box>

        <Box height={24} />

        <Box bg="gray250" p="4" borderRadius="rounded-2xl">
          <Box
            bg="white"
            width={80}
            p="2"
            mb="4"
            alignItems="center"
            borderRadius="rounded-2xl"
          >
            <Text
              color={newCategory.color.name as any}
              variant="textBase"
              fontWeight="600"
            >
              {newCategory.icon.symbol}
            </Text>
          </Box>
          <Box justifyContent="space-evenly" flexDirection="row">
            {ICONS.map((icon) => {
              return (
                <Pressable key={icon.id} onPress={() => updateIcon(icon)}>
                  <Box width={24} height={24} borderRadius="rounded-2xl">
                    <Text>{icon.symbol}</Text>
                  </Box>
                </Pressable>
              );
            })}
          </Box>
        </Box>

        <Box position="absolute" bottom={16} left={0} right={0}>
          <Button
            label="create new category"
            uppercase
            onPress={createNewCategory}
          />
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default CreateCategoryScreen;

const styles = StyleSheet.create({});
