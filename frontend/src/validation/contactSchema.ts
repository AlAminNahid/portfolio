import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(200, "Name length can't be greater than 200")
    .regex(/^[A-Za-z ]+$/, "Name can't contain numbers"),

  phone: z
    .string()
    .regex(/^01[0-9]{9}$/, "Phone number must be 11 digits and start with 01"),

  email: z
    .string()
    .email("Invalid email address"),

  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject length can't be greater than 100")
    .regex(/^[A-Za-z ]+$/, "Subject can't contain numbers"),

  messageBox: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message too long"),
});

export type ContactSchema = z.infer<typeof contactSchema>;