import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default ({ text, theme }: { text: string; theme?: 'secondary' | 'accent' }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
  textSecondary: {
    color: "#060606",
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin:5,
    marginVertical:30,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
  },
});