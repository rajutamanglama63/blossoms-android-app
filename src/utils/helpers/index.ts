// import { IColor, IIcon } from "@/types";
import { CatagoriesContext } from "@/context/categories-context";
// import { nanoid } from "nanoid";
import { useContext } from "react";
// import uuid from "react-native-uuid";

// when there is no api to fetch colors from backend then use following approach

// const palette = {
//   red500: "#ef4444",
//   red600: "#dc2626",
//   orange300: "#fdba74",
//   orange400: "#fb923c",
//   green500: "#22c55e",
//   green600: "#16a34a",
//   sky400: "#38bdf8",
//   sky500: "#0ea5e9",
//   purple500: "#a855f7",
//   purple600: "#9333ea",
// };

// export const getColors = () => {
//   const colors: IColor[] = Object.keys(palette).map((_paletteItem) => {
//     return {
//       //   id: `color_${nanoid()}`,
//       id: `color_${uuid.v4()}`,
//       code: palette[_paletteItem as keyof typeof palette],
//       name: _paletteItem,
//     };
//   });
//   return colors;
// };

// when there is api to fetch colors from backend then use following approach

export const getColors = () => {
  const categoriesContext = useContext(CatagoriesContext);
  const colors: IColor[] =
    categoriesContext?.colors.length !== 0
      ? categoriesContext?.colors.map((_colorItemObj) => {
          return {
            id: `color_${_colorItemObj.id}`,
            code: _colorItemObj.code,
            name: _colorItemObj.name,
          };
        }) || []
      : [];

  return colors;
};

// when there is no api to fetch icons from backend then use following approach

// const ICON_SET = {
//   seed: "🌱",
//   fries: "🍟",
//   pizza: "🍕",
//   rocket: "🚀",
//   grinning: "😀",
//   partying_face: "🥳",
//   beach_umbrella: "🏖️",
// };

// export const getIcons = () => {
//   const icons: IIcon[] = Object.keys(ICON_SET).map((_icon) => {
//     return {
//       //   id: `icon_${nanoid()}`,
//       id: `icon_${uuid.v4()}`,
//       name: _icon,
//       symbol: ICON_SET[_icon as keyof typeof ICON_SET],
//     };
//   });
//   return icons;
// };

// when there is api to fetch icons from backend then use following approach

export const getIcons = () => {
  const categoriesContext = useContext(CatagoriesContext);
  const icons: IIcon[] =
    categoriesContext?.icons.length !== 0
      ? categoriesContext?.icons.map((_iconItemObj) => {
          return {
            id: `icon_${_iconItemObj.id}`,
            name: _iconItemObj.name,
            symbol: _iconItemObj.symbol,
          };
        }) || []
      : [];

  return icons;
};

export const getGreeting = ({ hour }: { hour: number }) => {
  if (hour < 12) {
    return "morning";
  }
  if (hour < 18) {
    return "evening";
  } else {
    return "night";
  }
};
