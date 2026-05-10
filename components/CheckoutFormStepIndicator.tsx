import { useSegments } from "expo-router";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const steps = [
  { key: "personal", name: "Personal" },
  { key: "payment", name: "Payment" },
  { key: "summary", name: "Summary" },
];

const CheckoutFormStepIndicator = () => {
  const segments = useSegments();
  const currentScreen = segments[segments?.length - 1];

  const stepIndex = steps?.findIndex((step) => step?.key === currentScreen);
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {steps?.map((item, index) => (
        <View
          key={item?.key}
          style={[
            styles.steps,
            {
              borderColor: stepIndex >= index ? "#005055" : "lightgray",
            },
          ]}
        >
          <Text
            style={[
              styles.stepsText,
              {
                color: stepIndex >= index ? "#005055" : "gray",
              },
            ]}
          >
            {item?.name}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default CheckoutFormStepIndicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "ios" ? 10 : 15,
    paddingBottom: 20,
    gap: 15,
    minHeight: 70,
  },
  steps: {
    borderBottomWidth: 3,
    borderColor: "red",
    paddingBottom: 10,

    flex: 1,
  },
  stepsText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
