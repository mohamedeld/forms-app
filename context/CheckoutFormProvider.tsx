import { PaymentType } from "@/schema/paymentSchema";
import { PersonaInfoType } from "@/schema/personaSchema";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type CheckoutFormState = {
  personalInfo: PersonaInfoType | undefined;
  paymentInfo: PaymentType | undefined;
};

type CheckoutFormContextType = {
  state: CheckoutFormState;
  setState: React.Dispatch<React.SetStateAction<CheckoutFormState>>;
};

const CheckoutFormContext = createContext<CheckoutFormContextType | undefined>(
  undefined,
);

const CheckoutFormProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<{
    personalInfo: PersonaInfoType | undefined;
    paymentInfo: PaymentType | undefined;
  }>({
    personalInfo: undefined,
    paymentInfo: undefined,
  });
  return (
    <CheckoutFormContext.Provider value={{ state, setState }}>
      {children}
    </CheckoutFormContext.Provider>
  );
};

export default CheckoutFormProvider;

export const useCheckoutForm = () => {
  const context = useContext(CheckoutFormContext);
  if (context === undefined) {
    throw new Error("use checkout form within provider");
  }
  return context;
};
