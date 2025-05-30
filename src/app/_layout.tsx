import { Stack } from 'expo-router';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import Toast from 'react-native-toast-message';

export default function AuthLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='signup' />
        <Stack.Screen name='forgotpassword' />
      </Stack>
      <Toast />
    </>
  );
}
