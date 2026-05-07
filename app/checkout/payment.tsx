import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PaymentDetailsForm = () => {
  const handleNext = () => {
    router.push("/checkout/summary");
  };
  return (
    <View style={styles.container}>
      <Text>Payment Details Page</Text>

      <CustomButton title="Next" style={styles.nextBtn} onPress={handleNext} />
    </View>
  );
};

export default PaymentDetailsForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
  },
  nextBtn: {
    marginTop: "auto",
    marginBottom: 25,
  },
});
