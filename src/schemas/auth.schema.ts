import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha deve ter ao menos 6 caracteres'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
