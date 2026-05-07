import { Redirect } from "expo-router";
import React from "react";

const InitCheckoutFlow = () => {
  return <Redirect href={"/checkout/personal"} />;
};

export default InitCheckoutFlow;
