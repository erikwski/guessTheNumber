import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { StartGame } from "./screens/StartGame";
import { ScreenGame } from "./screens/ScreenGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect, useCallback } from "react";
import { colors } from "./config/color.js";

export default function App() {
  const { container } = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      width: "100%",
      height: "100%",
    },
  });
  const [numberSelected, setNumberSelected] = useState(0);
  let start = <StartGame triggerStart={setNumberSelected} />;
  let game = (
    <ScreenGame secretNumber={numberSelected} undoStart={setNumberSelected} />
  );

  return (
    <KeyboardAvoidingView style={container}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        {numberSelected > 0 ? game : start}
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
