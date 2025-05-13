import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, SignupFormData } from '../schemas/signup.schema';

export function useSignupForm(onSubmit: SubmitHandler<SignupFormData>) {
  const methods = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
  });

  return {
    ...methods,
    handleSignup: methods.handleSubmit(onSubmit),
  };
}
