import React, { createContext, useState } from "react";
import { Alert } from "react-native";

export const FrasesContext = createContext();

const FrasesProvider = (props) => {
  const [frase, setFrase] = useState([{}]);

  const leerFrase = (Frase) => {
    const api_url = `https://zenquotes.io/api/${Frase}`;

    async function getapi(url) {
      const response = await fetch(url);
      var data = await response.json();
      setFrase(data);
    }

    getapi(api_url);
  };

  return (
    <FrasesContext.Provider
      value={{
        frase,
        leerFrase,
      }}
    >
      {props.children}
    </FrasesContext.Provider>
  );
};

export default FrasesProvider;

// const api_url = `https://zenquotes.io/api/${Frase}`;
// fetch(api_url).then((datos)=>{
//     console.log(datos.json());
//     return datos.json();
// }).then((resultado)=>{
//     setFrase(resultado);
// })
