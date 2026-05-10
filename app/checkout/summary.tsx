import CustomButton from "@/components/CustomButton";
import { useCheckoutForm } from "@/context/CheckoutFormProvider";
import { Link, router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SummaryScreen = () => {
  const {
    state: { paymentInfo, personalInfo },
    setState,
  } = useCheckoutForm();

  const handleNext = () => {
    setState((prev) => ({
      ...prev,
      personalInfo: undefined,
      paymentInfo: undefined,
    }));
    router.dismissAll();
    router.back();
  };
  return (
    <View style={styles.container}>
      {personalInfo && (
        <View style={styles.dataContainer}>
          <View style={styles.dataContainerHeader}>
            <Text style={styles.title}>Personal</Text>
            <Link
              href={"/checkout"}
              style={{ color: "#005055", fontWeight: "600" }}
            >
              Edit
            </Link>
          </View>
          {Object?.entries(personalInfo)?.map(([key, value]) => (
            <Text key={key}>
              {key}: {value?.toString()}
            </Text>
          ))}
        </View>
      )}

      {paymentInfo && (
        <View style={styles.dataContainer}>
          <View style={styles.dataContainerHeader}>
            <Text style={styles.title}>Payment</Text>
            <Link
              href={"/checkout/payment"}
              style={{ color: "#005055", fontWeight: "600" }}
            >
              Edit
            </Link>
          </View>
          {Object.entries(paymentInfo).map(([key, value]) => (
            <Text key={key}>
              {key}: {value?.toString()}
            </Text>
          ))}
        </View>
      )}

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
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    paddingBottom: 25,
    gap: 15,
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
    gap: 3,
  },
  dataContainerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  nextBtn: {
    marginTop: "auto",
    marginBottom: 25,
  },
});
