import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
};

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <Pressable style={s.container} onPress={onPress}>
      <Text style={s.text}>{label}</Text>
    </Pressable>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: "#C0E864",
    borderRadius: 5,
    padding: 15,
  },
  text: {
    fontSize: 15,
    color: "#000000",
    textAlign: "center",
  },
});

export default Button;
