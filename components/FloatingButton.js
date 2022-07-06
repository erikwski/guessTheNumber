import { Text, Pressable, View, StyleSheet, Icon } from "react-native";
import { colors } from "../config/color.js";
import { Ionicons } from "@expo/vector-icons";

const { floating } = StyleSheet.create({
  floating: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    position: "absolute",
    bottom: 15,
    left: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const FloatingButton = (props) => {
  return (
    <View style={floating}>
      <Pressable
        onPress={props.callback.bind(this, "")}
        android_ripple={{ color: "black", borderless: true }}
      >
        <Ionicons name="arrow-undo" size={40} color={colors.textColor} />
      </Pressable>
    </View>
  );
};
