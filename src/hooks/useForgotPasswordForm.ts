import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from '../schemas/forgotpassword.schema';

export function useForgotPasswordForm(
  onSubmit: SubmitHandler<ForgotPasswordFormData>,
) {
  const methods = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      new_password: '',
      confirm_new_password: '',
    },
  });

  return {
    ...methods,
    handleForgotPassword: methods.handleSubmit(onSubmit),
  };
}
