import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
      <GestureHandlerRootView>
        <Drawer screenOptions={{ headerShown: false }}>
          <Drawer.Screen name='index' />
        </Drawer>
      </GestureHandlerRootView>
      <Toast />
    </>
  );
}
