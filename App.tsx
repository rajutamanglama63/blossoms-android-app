import { AuthProvider } from "@/context/auth-context";
import { CatagoriesProvider } from "@/context/categories-context";
import Navigation from "@/navigation";
import theme from "@/utils/theme";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CatagoriesProvider>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar translucent />
          </SafeAreaProvider>
        </CatagoriesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
