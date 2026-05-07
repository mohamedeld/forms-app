import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SummaryScreen = () => {
  const handleNext = () => {
    router.dismissAll();
    router.back();
  };
  return (
    <View style={styles.container}>
      <Text>Confirm Form Submission</Text>

      <CustomButton
        title="Submit"
        style={styles.nextBtn}
        onPress={handleNext}
      />
    </View>
  );
};

export default SummaryScreen;

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
