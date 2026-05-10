import Checkbox from "expo-checkbox";
import React, { ComponentProps } from "react";
import { useController } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

type CustomCheckbox = {
  name: string;
  label?: string;
} & ComponentProps<typeof Checkbox>;
const CustomCheckbox = ({ name, label, ...rest }: CustomCheckbox) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name });
  return (
    <View>
      <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
        <Checkbox {...rest} value={value} onValueChange={onChange} />
        <Text style={styles.checkboxText}>{label}</Text>
      </View>
      <Text numberOfLines={1} style={styles.error}>
        {error?.message}
      </Text>
    </View>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  error: {
    color: "crimson",
    height: 17,
  },
  checkboxText: {
    fontWeight: "600",
    color: "dimgray",
  },
});
