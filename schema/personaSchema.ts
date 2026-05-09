import * as z from "zod";

export const PersonaInfoSchema = z.object({
  fullName: z
    .string({ message: "Full Name is required" })
    .min(1, { message: "Full name must be longer than 1" }),
  address: z.string({ message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  postcode: z.string().min(1, { message: "Post code is required" }),
  phone: z.string().min(1, { message: "Phone code is required" }),
});

export type PersonaInfoType = z.infer<typeof PersonaInfoSchema>;
