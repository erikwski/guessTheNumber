import { Text, Pressable, View, StyleSheet } from "react-native";
import { colors } from "../config/color.js";
const { primaryStyle, textButton } = StyleSheet.create({
  primaryStyle: {
    backgroundColor: colors.secondary,
    width: "40%",
    borderRadius: 30,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
  },
});

export const PrimaryButton = (props) => {
  return (
    <View style={primaryStyle}>
      <Pressable
        onPress={props.callback.bind(this, "")}
        android_ripple={{ color: "black", borderless: true }}
        style={{ padding: 12 }}
      >
        <Text style={textButton}>{props.text}</Text>
      </Pressable>
    </View>
  );
};
