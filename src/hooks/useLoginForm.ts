import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from '../schemas/auth.schema';

export function useLoginForm(onSubmit: SubmitHandler<LoginFormData>) {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return {
    ...methods,
    handleLogin: methods.handleSubmit(onSubmit),
  };
}
