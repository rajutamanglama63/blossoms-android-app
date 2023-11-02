import { getUserSpecificCategories, postCategory } from "@/services/apis";
import { fetcher } from "@/services/config";
import { ReactNode, createContext, useEffect, useState } from "react";

type CategoriesContextType = {
  loading: boolean;
  colors: IColor[];
  icons: IIcon[];
  categoriesData: never[];
  createCategories: (category: PostCategoryTypes) => void;
};

type CategoriesContextProviderType = {
  children: ReactNode;
};

type PostCategoryTypes = Omit<ICategory, "color" | "icon" | "userId" | "id">;

export const CatagoriesContext = createContext<
  CategoriesContextType | undefined
>(undefined);

export const CatagoriesProvider = ({
  children,
}: CategoriesContextProviderType) => {
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState([]);
  const [icons, setIcons] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  const createCategories = async (category: PostCategoryTypes) => {
    setLoading(true);
    try {
      const res = await postCategory(category);
      console.log("res after posting new category: ", res);
    } catch (error) {
      console.error("Error in posting category", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const allCategories = await getUserSpecificCategories();
      console.log("all: ", allCategories);
      setCategoriesData(allCategories);
    } catch (error) {
      console.error("Error in fetchingCategories", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchColors = async (url: string) => {
    setLoading(true);
    try {
      const allColors = await fetcher(url);
      setColors(allColors);
    } catch (error) {
      console.error("Error in fetchingColors", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchIcons = async (url: string) => {
    setLoading(true);
    try {
      const allIcons = await fetcher(url);
      setIcons(allIcons);
    } catch (error) {
      console.error("Error in fetchingIcons", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchColors("color");
    fetchIcons("icon");
  }, []);
  return (
    <CatagoriesContext.Provider
      value={{ loading, categoriesData, colors, icons, createCategories }}
    >
      {children}
    </CatagoriesContext.Provider>
  );
};
