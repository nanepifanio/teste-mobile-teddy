import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Link } from 'expo-router';
import {
  StyledContainer,
  StyledText,
  StyledView,
  StyledTitle,
  StyledRememberMeView,
} from './styles';
import { Checkbox } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  const [checked, setChecked] = useState(false);
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  function handleUsernameInput(value: string) {
    setUsernameInputValue(value);
  }

  function handlePasswordInput(value: string) {
    setPasswordInputValue(value);
  }

  function onButtonPress() {}

  return (
    <StyledContainer>
      <StyledTitle>Olá, seja bem-vindo!</StyledTitle>
      <Input
        value={usernameInputValue}
        onChange={handleUsernameInput}
        placeholder='Digite o seu E-mail'
        label='E-mail'
        style={styles.emailInput}
      />
      <Input
        value={passwordInputValue}
        onChange={handlePasswordInput}
        placeholder='Digite a sua senha'
        label='Senha'
        style={styles.passwordInput}
        allowShowPassword
      />
      <StyledView>
        <StyledRememberMeView>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
            color='#ec6724'
            uncheckedColor='#000'
          />
          <StyledText>Lembre-me</StyledText>
        </StyledRememberMeView>
        <Link href={'#'}>
          <StyledText style={styles.underline}>Esqueci minha senha</StyledText>
        </Link>
      </StyledView>
      <Button onPress={onButtonPress} style={styles.button} />
      <Link href={'#'}>
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
