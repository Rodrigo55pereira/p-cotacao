import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import { Fragment, useEffect, useState } from "react";
import { getUSD } from "../services/awesomeapi";

const Screen = () => {
  const [loading, setLoading] = useState(true);
  const [currencyValue, setCurrencyValue] = useState<Number>(0);

  const updateCurrency = async () => {
    setLoading(true);
    const dolar = await getUSD();
    setLoading(false);
    setCurrencyValue(dolar);
  };

  useEffect(() => {
    updateCurrency();
  }, []);

  return (
    <View style={s.container}>
      <Image
        source={require("../assets/dolar.png")}
        resizeMode="contain"
        style={s.logo}
      />

      {loading && <Text style={s.h2}>Carregando...</Text>}

      {!loading && (
        <Fragment>
          <Text style={s.h2}>O dólar americano está:</Text>
          <Text style={s.currencyText}>R$ {currencyValue.toFixed(2)}</Text>
          <Button label="Atualizar" onPress={updateCurrency} />
        </Fragment>
      )}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0B1C2D",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 180,
  },
  h2: {
    color: "#CCCCCC",
    fontSize: 24,
    marginTop: 30,
  },
  currencyText: {
    color: "#FFFFFF",
    fontSize: 52,
    marginTop: 20,
    marginBottom: 50,
  },
});

export default Screen;
