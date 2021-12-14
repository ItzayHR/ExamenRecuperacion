import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation1 from "./Navigation/StackNavigation1";
import FrasesProvider from "./Context/FrasesContext";

export default function App() {
  return (
    <FrasesProvider>
      <NavigationContainer>
        <StackNavigation1 />
      </NavigationContainer>
    </FrasesProvider>
  );
}
