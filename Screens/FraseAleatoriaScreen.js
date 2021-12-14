import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button } from "react-native-elements";
import FrasesProvider, { FrasesContext } from "../Context/FrasesContext";

const FraseAleatoriaScreen = ({ navigation }) => {
  const { frase, leerFrase } = useContext(FrasesContext);
  return (
    <View style={styles.Contenedor}>
      <Text style={styles.Texto}>Frase aleatoría: {frase[0].q}</Text>
      <Button
        title="Frase Aleatoria"
        color="orange"
        onPress={() => {
          leerFrase("random");
        }}
      />
      <Button
        title="Regresar"
        color="red"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default FraseAleatoriaScreen;

const styles = StyleSheet.create({
  Contenedor: {
    flex: 1,
    backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
  },
  Texto: {
    margin: 24,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
