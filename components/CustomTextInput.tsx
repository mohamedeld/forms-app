import React, { ComponentProps } from "react";
import { useController } from "react-hook-form";
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
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
} & ComponentProps<typeof TextInput>;
const CustomTextInput = ({
  label,
  containerStyle,
  name,
  ...rest
}: CustomTextInput) => {
  const {
    field: { onBlur, onChange, value },
    fieldState: { error },
  } = useController({ name });
  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.textInput, error ? styles.errorInput : {}, rest?.style]}
        {...rest}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
      />
      <Text numberOfLines={1} style={styles.error}>
        {error?.message}
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
