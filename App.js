import { StyleSheet, View } from "react-native";
import { StartGame } from "./screens/StartGame";
import { ScreenGame } from "./screens/ScreenGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect, useCallback } from "react";
import { colors } from "./config/color.js";
import { Font } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          TitanOne: require("./assets/fonts/TitanOne-Regular.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

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

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={container}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        {numberSelected > 0 ? game : start}
      </LinearGradient>
    </View>
  );
}
