import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button, Card  } from "react-native-elements";
import { FrasesContext } from "../Context/FrasesContext";

const ConjuntoDeFrasesScreen = ({ navigation }) => {
  const { frase, leerFrase } = useContext(FrasesContext);

  console.log("Frase: ", frase)
  return (
    <ScrollView>
        <View style={styles.Contenedor}>
        {
            frase.map((oracion, index)=>(
                <Text style={styles.Frases} key={index}>{index + 1}. {oracion.q}</Text>
            ))
        }
            <View>
                <Button
                    title="Regresar"
                    color="red"
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={styles.boton}
                />
            </View>
        </View>
    </ScrollView>
  );
};

export default ConjuntoDeFrasesScreen;

const styles = StyleSheet.create({
  Contenedor: {
    flex: 1,
    backgroundColor: "#CCC",
    justifyContent: "center",
    paddingTop:50,
  },
  Frases: {
    margin: 24,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign:'left'
  },
  boton:{
      width:150,
      alignSelf:'center',
  }
});