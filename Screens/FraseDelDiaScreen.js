import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button } from "react-native-elements";
import { FrasesContext } from "../Context/FrasesContext";

const FraseDelDiaScreen = ({ navigation }) => {
  const { frase, leerFrase } = useContext(FrasesContext);
  return (
    <View style={styles.Contenedor}>
      <Text style={styles.Texto}>Frase del día: {frase[0].q}</Text>
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

export default FraseDelDiaScreen;

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
    color: "#000",
  },
});
