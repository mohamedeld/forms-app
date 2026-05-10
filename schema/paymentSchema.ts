import * as z from "zod";

export const PaymentSchema = z.object({
  cardNumber: z.string({ message: "card number is required" }).length(16),
  expires: z
    .string({ message: "Expire Date is required" })
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Please use MM/YY format"),
  cvv: z.coerce.number().min(100, { message: "Cvv is required" }).max(999),
  agree: z.boolean().optional(),
});

export type PaymentType = z.infer<typeof PaymentSchema>;
