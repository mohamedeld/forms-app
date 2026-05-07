import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const CheckoutLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="personal" options={{ title: "Personal" }} />
      <Stack.Screen name="payment" options={{ title: "Payment" }} />
      <Stack.Screen name="summary" options={{ title: "Summary" }} />
    </Stack>
  );
};

export default CheckoutLayout;

const styles = StyleSheet.create({});
