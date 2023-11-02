import { fetcher } from "@/services/config";
import { ReactNode, createContext, useEffect, useState } from "react";

type CategoriesContextType = {
  loading: boolean;
  colors: IColor[];
  icons: IIcon[];
  categoriesData: never[];
  //   fetchCategories: (url: string) => Promise<any>;
};

type CategoriesContextProviderType = {
  children: ReactNode;
};

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

  const fetchCategories = async (url: string) => {
    setLoading(true);
    try {
      const allCategories = await fetcher(url);
      // console.log("all: ", allCategories);
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
    fetchCategories("catagories");
    fetchColors("color");
    fetchIcons("icon");
  }, []);
  return (
    <CatagoriesContext.Provider
      value={{ loading, categoriesData, colors, icons }}
    >
      {children}
    </CatagoriesContext.Provider>
  );
};
