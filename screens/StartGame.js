import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { useState } from "react";
import { colors } from "../config/color.js";

const { title, input, buttonContainer } = StyleSheet.create({
  title: {
    fontSize: 64,
    color: colors.textColor,
    marginBottom: 40,
    marginTop: -20,
    fontWeight: "bold",
    textAlign: "center",
    // fontFamily: "TitanOne",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.primaryDark,
    marginBottom: 30,
    borderRadius: 10,
    padding: 5,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export const StartGame = (props) => {
  const [startNumber, setStartNumber] = useState("");
  function inputChange(enteredText) {
    setStartNumber(enteredText);
  }
  function resetFunction() {
    setStartNumber("");
  }
  function startGame() {
    let num = Number(startNumber);
    if (num > 0 && num < 100) {
      props.triggerStart(num);
    } else {
      alert("Il numero inserito deve essere maggiore di  e minore di 100");
    }
  }
  return (
    <ImageBackground
      source={require("../assets/img/background.png")}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "center", padding: 16 }}
      imageStyle={{ opacity: 0.2 }}
    >
      <Text style={title}>
        {Dimensions.get("window").width < 400
          ? "DIGIT A NUMBER"
          : " DIGIT MAGIC NUMBER"}
      </Text>
      <TextInput
        onChangeText={inputChange}
        keyboardType="numeric"
        placeholder="Min: 1 Max: 99"
        maxLength={2}
        value={startNumber}
        style={input}
      />
      <View style={buttonContainer}>
        <PrimaryButton callback={resetFunction} text="RESET"></PrimaryButton>
        <PrimaryButton callback={startGame} text="START"></PrimaryButton>
      </View>
    </ImageBackground>
  );
};
