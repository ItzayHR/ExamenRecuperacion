import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import FraseDelDiaScreen from "../Screens/FraseDelDiaScreen";
import FraseAleatoriaScreen from "../Screens/FraseAleatoriaScreen";
import ConjuntoDeFrasesScreen from "../Screens/ConjuntoDeFrasesScreen";

const Stack = createStackNavigator();

export default function StackNavigation1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, headerTitle: "Home" }}
      />
      <Stack.Screen
        name="FraseDia"
        component={FraseDelDiaScreen}
        options={{ headerShown: false, headerTitle: "Frase del Dia" }}
      />
      <Stack.Screen
        name="FraseAleatoria"
        component={FraseAleatoriaScreen}
        options={{ headerShown: false, headerTitle: "Frase Aleatoria" }}
      />
      <Stack.Screen
        name="ConjuntoFrases"
        component={ConjuntoDeFrasesScreen}
        options={{ headerShown: false, headerTitle: "Conjunto de Frases" }}
      />
    </Stack.Navigator>
  );
}
