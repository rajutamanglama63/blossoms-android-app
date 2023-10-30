import { fetcher } from "@/services/config";
import { ReactNode, createContext, useEffect, useState } from "react";

type CategoriesContextType = {
  loading: boolean;
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
  const [categoriesData, setCategoriesData] = useState([]);

  const fetchCategories = async (url: string) => {
    setLoading(true);
    try {
      const allCategories = await fetcher(url);
      console.log("all: ", allCategories);
      setCategoriesData(allCategories);
    } catch (error) {
      console.error("Error in login", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories("catagories");
  }, []);
  return (
    <CatagoriesContext.Provider value={{ loading, categoriesData }}>
      {children}
    </CatagoriesContext.Provider>
  );
};
