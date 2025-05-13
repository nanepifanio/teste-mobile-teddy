import { z } from 'zod';

export const forgotPasswordSchema = z
  .object({
    new_password: z
      .string()
      .nonempty('A senha é obrigatória')
      .min(6, 'A senha deve ter ao menos 6 caracteres'),
    confirm_new_password: z
      .string()
      .nonempty({ message: 'Repita a nova senha por favor.' }),
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: 'As senhas não conferem.',
    path: ['confirm_new_password'],
  });

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
