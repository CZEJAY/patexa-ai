import * as z from "zod";

export const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }),
    username: z
      .string()
      .min(3, { message: "Username should be atlest 3 charcters." }),
    password: z.string().min(1, { message: "Password is required" }),
  });
export const loginSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }),
    password: z.string().min(1, { message: "Password is required" }),
  });
export const resetSchema = z.object({
    email: z.string().min(1, { message: "Email is required" })
  });
export const NewPasswordSchema = z.object({
    password: z.string().min(1, { message: "Email is required" })
  });
  
