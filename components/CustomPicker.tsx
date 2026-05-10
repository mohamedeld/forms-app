import React, { ComponentProps } from "react";
import { useController } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

type CustomPicker = {
  name: string;
} & Omit<ComponentProps<typeof RNPickerSelect>, "onValueChange">;
const CustomPicker = ({ name, ...rest }: CustomPicker) => {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name });
  return (
    <View>
      <RNPickerSelect
        {...rest}
        onValueChange={onChange}
        value={value}
        onClose={onBlur}
        style={{
          inputIOS: {
            borderColor: error ? "crimson" : "gainsboro",
            borderWidth: 1,
            width: "100%",
            padding: 10,
            borderRadius: 5,
          },
        }}
      />
      <Text numberOfLines={1} style={styles.error}>
        {error?.message}
      </Text>
    </View>
  );
};

export default CustomPicker;

const styles = StyleSheet.create({
  error: {
    color: "crimson",
    height: 17,
  },
});
