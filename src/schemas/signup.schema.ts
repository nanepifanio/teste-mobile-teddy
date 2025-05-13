import { z } from 'zod';

export const signupSchema = z
  .object({
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Formato de e-mail inválido'),
    password: z
      .string()
      .nonempty('A senha é obrigatória')
      .min(6, 'A senha deve ter ao menos 6 caracteres'),
    confirm_password: z
      .string()
      .nonempty({ message: 'Repita a senha por favor.' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas não conferem.',
    path: ['confirm_password'],
  });

export type SignupFormData = z.infer<typeof signupSchema>;
