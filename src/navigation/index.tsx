// import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
// import React, { useContext } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import AuthStackNavigator from "./auth-stack-navigator";
// import AppStackNavigator from "./app-stack-navigator";
// import { AuthContext } from "@/context/auth-context";
// import { Box } from "@/utils/theme";

// const Navigation = () => {
//   const authContext = useContext(AuthContext);

//   if (authContext?.loading) {
//     return (
//       <>
//         <Box flex={1} alignItems="center" justifyContent="center">
//           <ActivityIndicator size={"large"} />
//         </Box>
//         ;
//       </>
//     );
//   }
//   return (
//     <NavigationContainer>
//       {authContext?.token !== "" ? (
//         <AppStackNavigator />
//       ) : (
//         <AuthStackNavigator />
//       )}
//     </NavigationContainer>
//   );
// };

// export default Navigation;

// const styles = StyleSheet.create({});

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./auth-stack-navigator";
import AppStackNavigator from "./app-stack-navigator";
import { AuthContext } from "@/context/auth-context";
import { Box } from "@/utils/theme";

const Navigation = () => {
  const authContext = useContext(AuthContext);

  if (authContext?.loading) {
    return (
      <Box flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator size={"large"} />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {authContext?.token !== "" ? (
        <AppStackNavigator />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
