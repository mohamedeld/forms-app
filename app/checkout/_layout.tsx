import CheckoutFormStepIndicator from "@/components/CheckoutFormStepIndicator";
import CheckoutFormProvider from "@/context/CheckoutFormProvider";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const CheckoutLayout = () => {
  return (
    <CheckoutFormProvider>
      <CheckoutFormStepIndicator />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="personal" options={{ title: "Personal" }} />
        <Stack.Screen name="payment" options={{ title: "Payment" }} />
        <Stack.Screen name="summary" options={{ title: "Summary" }} />
      </Stack>
    </CheckoutFormProvider>
  );
};

export default CheckoutLayout;

const styles = StyleSheet.create({});
