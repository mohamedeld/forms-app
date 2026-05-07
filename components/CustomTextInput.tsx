import React, { ComponentProps } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";

type CustomTextInput = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
} & ComponentProps<typeof TextInput>;
const CustomTextInput = ({
  label,
  containerStyle,
  ...rest
}: CustomTextInput) => {
  const error = undefined;
  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.textInput, error ? styles.errorInput : {}, rest?.style]}
        {...rest}
      />
      <Text numberOfLines={1} style={styles.error}>
        {(error as any)?.message}
      </Text>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 2,
  },
  errorInput: {
    borderColor: "crimson",
  },
  label: {
    fontWeight: "600",
    color: "dimgray",
  },

  error: {
    color: "crimson",
    height: 17,
  },
});
