import { StyleSheet, Alert, View, Text } from "react-native";
import { FloatingButton } from "../components/FloatingButton";
import { PrimaryButton } from "../components/PrimaryButton";
import { useState, useEffect } from "react";

const { title, guessStyle, buttonContainer } = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: "center",
    marginTop: -100,
    marginBottom: 20,
    // fontFamily: "TitanOne",
  },
  guessStyle: {
    fontWeight: "900",
    fontSize: 80,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export const ScreenGame = (props) => {
  function generateRandomBetween(min, max, exclude) {
    if (max - min > 2) {
      const rndNum = Math.floor(Math.random() * (max - min)) + min;

      if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
      } else {
        return rndNum;
      }
    } else {
      return props.secretNumber;
    }
  }
  const [min, setMininum] = useState(0);
  const [max, setMaximum] = useState(99);
  const [attempt, setAttempt] = useState(-1);
  const [guessNumber, setGuessNumber] = useState(
    generateRandomBetween(min, max, props.secretNumber)
  );
  // that function was needed cuz we need to await the
  // change of state for generate the new number
  useEffect(() => {
    generateNumber();
  }, [min]);
  useEffect(() => {
    generateNumber();
  }, [max]);
  useEffect(() => {
    if (guessNumber === props.secretNumber)
      Alert.alert("Nice work!!!", `Get it in ${attempt} attempt !!!`, [
        {
          text: "RESTART",
          onPress: () => props.undoStart(""),
        },
      ]);
  }, [guessNumber]);
  //checking difference min 3 because math.rand freeze
  //in loop if not added
  function underValue() {
    setMaximum(guessNumber - (guessNumber - min >= 3 ? 1 : 0));
  }
  function upperValue() {
    setMininum(guessNumber + (max - guessNumber >= 3 ? 1 : 0));
  }
  function generateNumber() {
    setAttempt(attempt + 1);
    setGuessNumber(generateRandomBetween(min, max, null));
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={title}>MY GUESS IS</Text>
      <Text style={guessStyle}>{guessNumber}</Text>
      <View style={buttonContainer}>
        <PrimaryButton callback={underValue} text="UNDER"></PrimaryButton>
        <PrimaryButton callback={upperValue} text="UP"></PrimaryButton>
      </View>
      <FloatingButton callback={props.undoStart}></FloatingButton>
    </View>
  );
};
