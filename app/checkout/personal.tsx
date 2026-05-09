import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import WrapperContainer from "@/components/WrapperContainer";
import { PersonaInfoSchema, PersonaInfoType } from "@/schema/personaSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
const PersonalDetailsForm = () => {
  const form = useForm({
    resolver: zodResolver(PersonaInfoSchema),
  });
  const handleNext = (data: PersonaInfoType) => {
    console.log("data", data);
    router.push("/checkout/payment");
  };
  return (
    <WrapperContainer>
      <FormProvider {...form}>
        <View style={styles.container}>
          <CustomTextInput
            label="Full Name"
            placeholder="Joe do"
            name="fullName"
          />
          <CustomTextInput
            name="address"
            label="Address"
            placeholder="Address"
          />
          <View style={{ flexDirection: "row", gap: 5 }}>
            <CustomTextInput
              label="City"
              placeholder="City"
              name="city"
              containerStyle={{ flex: 1 }}
            />
            <CustomTextInput
              label="Post code"
              placeholder="1234"
              name="postcode"
              containerStyle={{ flex: 1 }}
            />
          </View>
          <CustomTextInput
            label="Phone"
            name="phone"
            placeholder="01022477859"
            inputMode="tel"
          />
          <CustomButton
            title="Next"
            style={styles.nextBtn}
            onPress={form?.handleSubmit(handleNext)}
          />
        </View>
      </FormProvider>
    </WrapperContainer>
  );
};

export default PersonalDetailsForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexGrow: 1,
    padding: 10,
    gap: 10,
  },
  nextBtn: {
    marginTop: "auto",
  },
});
