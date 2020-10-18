/* eslint-disable global-require */
/* eslint-disable import/prefer-default-export */
import * as Font from 'expo-font';

export async function bootstrap() {
  await Font.loadAsync({
    'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });
}
