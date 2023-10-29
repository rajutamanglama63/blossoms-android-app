import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type AuthContextType = {
  loading: boolean;
  // setLoading: Dispatch<SetStateAction<boolean>>
  token: string;
  // setToken: Dispatch<SetStateAction<string>>
  login: () => void;
  logout: () => void;
};

type AuthContextProviderType = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthContextProviderType) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  const login = () => {
    setLoading(true);
    setToken("adfall");
    setLoading(false);
  };

  const logout = () => {
    setLoading(true);
    setToken("");
    setLoading(false);
    console.log("pressed");
  };
  return (
    <AuthContext.Provider value={{ loading, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
