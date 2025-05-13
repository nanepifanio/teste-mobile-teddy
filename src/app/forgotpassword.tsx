import { StyledContainer, StyledTitle } from './styles';
import { useForgotPasswordForm } from '../hooks/useForgotPasswordForm';
import { Controller } from 'react-hook-form';
import Input from '../components/Input';
import { StyleSheet } from 'react-native';
import Button from '../components/Button';
import { useUserDataStore } from '../store/useUserDataStore';
import Toast from 'react-native-toast-message';
import { router } from 'expo-router';

export default function ForgotPassword() {
  const setPassword = useUserDataStore((s) => s.setPassword);

  const {
    control,
    handleForgotPassword,
    formState: { errors },
  } = useForgotPasswordForm(({ new_password }) => {
    setPassword(new_password);
    Toast.show({
      type: 'success',
      text1: 'Nova senha criada com sucesso!',
    });
    router.replace('/');
  });

  return (
    <StyledContainer>
      <StyledTitle>Esqueci a senha</StyledTitle>
      <Controller
        control={control}
        name='new_password'
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            placeholder='Digite a nova senha'
            label='Nova Senha'
            style={
              !!errors.new_password
                ? { ...styles.passwordInput, marginBottom: 0 }
                : styles.passwordInput
            }
            allowShowPassword
            onBlur={onBlur}
            error={!!errors.new_password}
            errorText={errors.new_password?.message?.toString() ?? null}
          />
        )}
      />
      <Controller
        control={control}
        name='confirm_new_password'
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            placeholder='Confirme a sua nova senha'
            label='Confirmar nova senha'
            style={
              !!errors.confirm_new_password
                ? { ...styles.passwordInput, marginBottom: 0 }
                : styles.passwordInput
            }
            allowShowPassword
            onBlur={onBlur}
            error={!!errors.confirm_new_password}
            errorText={errors.confirm_new_password?.message?.toString() ?? null}
          />
        )}
      />
      <Button
        buttonText={'CRIAR NOVA SENHA'}
        onPress={handleForgotPassword}
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
