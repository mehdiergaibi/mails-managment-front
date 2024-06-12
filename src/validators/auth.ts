import { z } from "zod";

export const LoginValidator = z.object({
  username: z
    .string()
    .min(2, { message: "Votre Nom doit etre au moin 2 caractere" }),
  password: z
    .string()
    .min(6, { message: "Votre Mot de pass doit etre au moin 6 caractere" })
    /* .refine(
      (val) => {
        const hasUpperCase = /[A-Z]/.test(val);
        const hasNumber = /\d/.test(val);
        const hasSymbol = /[~!@#$%^&*()_+]/.test(val);
        return hasUpperCase && hasNumber && hasSymbol;
      },
      {
        message:
          "Le Mot de Pass doit contenir au moins une majuscule, un nombre, et un symbole: ~!@#$%^&*()_+",
      }
    ), */
});
