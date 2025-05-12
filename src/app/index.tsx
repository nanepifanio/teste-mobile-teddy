import { Link } from 'expo-router';
import Input from '../components/Input';
import { StyleSheet } from 'react-native';
import Button from '../components/Button';
import { Controller } from 'react-hook-form';
import { Checkbox } from 'react-native-paper';
import { useLoginForm } from '../hooks/useLoginForm';
import { useRememberMeStore } from '../store/useRememberMeStore';
import {
  StyledContainer,
  StyledText,
  StyledView,
  StyledTitle,
  StyledRememberMeView,
} from './styles';

export default function WelcomeScreen() {
  const rememberMe = useRememberMeStore((s) => s.rememberMe);
  const setRememberMe = useRememberMeStore((s) => s.setRememberMe);

  const {
    control,
    handleLogin,
    formState: { errors },
  } = useLoginForm(({ email, password }) => {
    console.log({ email, password, rememberMe });
  });

  return (
    <StyledContainer>
      <StyledTitle>Olá, seja bem-vindo!</StyledTitle>
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
      <StyledView>
        <StyledRememberMeView>
          <Checkbox
            status={rememberMe ? 'checked' : 'unchecked'}
            onPress={() => setRememberMe(!rememberMe)}
            color='#ec6724'
            uncheckedColor='#000'
          />
          <StyledText>Lembre-me</StyledText>
        </StyledRememberMeView>
        <Link href={'#'} asChild>
          <StyledText style={styles.underline}>Esqueci minha senha</StyledText>
        </Link>
      </StyledView>
      <Button
        buttonText={'ENTRAR'}
        onPress={handleLogin}
        style={styles.button}
      />
      <Link href={'/signup'} asChild>
        <StyledText style={styles.underline}>
          Ainda não tem cadastro? Criar nova conta
        </StyledText>
      </Link>
    </StyledContainer>
  );
}

const styles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline',
  },
  emailInput: {
    marginTop: 20,
  },
  passwordInput: {
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    marginTop: 40,
    marginBottom: 20,
  },
});
