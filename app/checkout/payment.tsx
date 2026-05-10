import CustomButton from "@/components/CustomButton";
import CustomCheckbox from "@/components/CustomCheckbox";
import CustomTextInput from "@/components/CustomTextInput";
import WrapperContainer from "@/components/WrapperContainer";
import { useCheckoutForm } from "@/context/CheckoutFormProvider";
import { PaymentSchema, PaymentType } from "@/schema/paymentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

const PaymentDetailsForm = () => {
  const {
    state: { paymentInfo },
    setState,
  } = useCheckoutForm();
  const form = useForm({
    resolver: zodResolver(PaymentSchema),
    defaultValues: paymentInfo,
  });
  const handleNext: SubmitHandler<PaymentType> = (data) => {
    setState((prev) => ({
      ...prev,
      paymentInfo: {
        ...data,
      },
    }));
    router.push("/checkout/summary");
  };
  return (
    <WrapperContainer>
      <FormProvider {...form}>
        <View style={styles.container}>
          <CustomTextInput
            name="cardNumber"
            label="Card Number"
            placeholder="1234123412341234"
          />
          <View style={{ flexDirection: "row", gap: 5 }}>
            <CustomTextInput
              name="expires"
              label="Expire Date"
              placeholder="01/23"
              containerStyle={{ flex: 1 }}
            />
            <CustomTextInput
              name="cvv"
              label="Cvv"
              placeholder="123"
              containerStyle={{ flex: 1 }}
              inputMode="numeric"
            />
          </View>
          <CustomCheckbox name="agree" label="Save credit Card" />
          <CustomButton
            title="Next"
            style={styles.nextBtn}
            onPress={form.handleSubmit(handleNext)}
          />
        </View>
      </FormProvider>
    </WrapperContainer>
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
