import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button } from "react-native-elements";
import { FrasesContext } from "../Context/FrasesContext";

const HomeScreen = ({ navigation }) => {
  const { leerFrase } = useContext(FrasesContext);
  return (
    <View style={styles.Contenedor}>
      <Text style={styles.Titulo}>Kevin Itzay Hernández te está solicitando que selecciones una frase de abajo.</Text>
      <Button
        title="Frase del Día"
        color="purple"
        onPress={() => {
          navigation.navigate("FraseDia");
          leerFrase("today");
        }}
      />

      <Button
        title="Frase Aleatoria"
        color="orange"
        onPress={() => {
          navigation.navigate("FraseAleatoria");
          leerFrase("random");
        }}
      />

      <Button
        title="Conjunto de Frases"
        color="blue"
        onPress={() => {
          navigation.navigate("ConjuntoFrases");
          leerFrase("quotes");
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Contenedor: {
    flex: 1,
    backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
  },
  Titulo: {
    margin: 24,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
