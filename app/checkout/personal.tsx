import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const PersonalDetailsForm = () => {
  const handleNext = () => {
    router.push("/checkout/payment");
  };
  return (
    <View style={styles.container}>
      <CustomTextInput label="Full Name" placeholder="Joe do" />
      <CustomTextInput label="Address" placeholder="Address" />
      <View style={{ flexDirection: "row", gap: 5 }}>
        <CustomTextInput
          label="City"
          placeholder="City"
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          label="Post code"
          placeholder="1234"
          containerStyle={{ flex: 1 }}
        />
      </View>
      <CustomTextInput
        label="Phone"
        placeholder="01022477859"
        inputMode="tel"
      />
      <CustomButton title="Next" style={styles.nextBtn} onPress={handleNext} />
    </View>
  );
};

export default PersonalDetailsForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    gap: 10,
  },
  nextBtn: {
    marginTop: "auto",
    marginBottom: 25,
  },
});
