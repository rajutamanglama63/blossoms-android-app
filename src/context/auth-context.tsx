import { getUsers, loginUser } from "@/services/apis";
import { BLOSSOM_TOKEN_NAME, saveToken } from "@/services/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  loading: boolean;
  // setLoading: Dispatch<SetStateAction<boolean>>
  token: string;
  // setToken: Dispatch<SetStateAction<string>>
  login: ({ email, password }: LoginUserTypes) => void;
  logout: () => void;
};

type AuthContextProviderType = {
  children: ReactNode;
};

type LoginUserTypes = Omit<IUser, "name">;
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthContextProviderType) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  const login = async ({ email, password }: LoginUserTypes) => {
    setLoading(true);

    try {
      const response = await loginUser({ email, password });
      const _token = response.data.token;
      setToken(_token);
    } catch (error) {
      console.error("Error in login", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setLoading(true);
    setToken("");
    AsyncStorage.removeItem(BLOSSOM_TOKEN_NAME);
    setLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setLoading(true);
      let _token = await AsyncStorage.getItem(BLOSSOM_TOKEN_NAME);
      console.log("token: ", _token);
      // Check if _token is null and provide a default value if necessary
      //   if (_token === null) {
      //     setToken("");
      //     setLoading(false);
      //   }
      setToken(_token || ""); // Provide an empty string as the default
      setLoading(false);
    } catch (error) {
      console.log(`isLogged in error ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ loading, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
