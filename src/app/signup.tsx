import { StyledContainer, StyledTitle } from './styles';
import { useSignupForm } from '../hooks/useSignupForm';
import { Controller } from 'react-hook-form';
import Input from '../components/Input';
import { StyleSheet } from 'react-native';
import Button from '../components/Button';
import { useUserDataStore } from '../store/useUserDataStore';
import Toast from 'react-native-toast-message';
import { router } from 'expo-router';

export default function Signup() {
  const setSignupData = useUserDataStore((s) => s.setSignupData);

  const {
    control,
    handleSignup,
    formState: { errors },
  } = useSignupForm(({ email, password }) => {
    setSignupData({ email, password });
    Toast.show({
      type: 'success',
      text1: 'Cadastro feito com sucesso!',
    });
    router.replace('/');
  });

  return (
    <StyledContainer>
      <StyledTitle>Cadastre-se</StyledTitle>
      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            placeholder='Digite o seu E-mail'
            keyboardType='email-address'
            label='E-mail'
            style={styles.emailInput}
            onBlur={onBlur}
            autoCapitalize='none'
            error={!!errors.email}
            errorText={errors.email?.message?.toString() ?? null}
          />
        )}
      />
      <Controller
        control={control}
        name='password'
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            placeholder='Digite a sua senha'
            label='Senha'
            style={
              !!errors.password
                ? { ...styles.passwordInput, marginBottom: 0 }
                : styles.passwordInput
            }
            allowShowPassword
            onBlur={onBlur}
            error={!!errors.password}
            errorText={errors.password?.message?.toString() ?? null}
          />
        )}
      />
      <Controller
        control={control}
        name='confirm_password'
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            placeholder='Confirme a sua senha'
            label='Confirmar senha'
            style={
              !!errors.confirm_password
                ? { ...styles.passwordInput, marginBottom: 0 }
                : styles.passwordInput
            }
            allowShowPassword
            onBlur={onBlur}
            error={!!errors.confirm_password}
            errorText={errors.confirm_password?.message?.toString() ?? null}
          />
        )}
      />
      <Button
        buttonText={'CADASTRAR'}
        onPress={handleSignup}
        style={styles.button}
      />
    </StyledContainer>
  );
}

const styles = StyleSheet.create({
  emailInput: {
    marginTop: 20,
  },
  passwordInput: {
    marginTop: 10,
  },
  button: {
    marginTop: 20,
  },
});
