import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    'GolosText-Black': require('./assets/fonts/GolosText-Black.ttf'),
    'GolosText-Regular': require('./assets/fonts/GolosText-Regular.ttf'),
    'GolosText-ExtraBold': require('./assets/fonts/GolosText-ExtraBold.ttf'),
    'GolosText-Medium': require('./assets/fonts/GolosText-Medium.ttf'),
    'GolosText-SemiBold': require('./assets/fonts/GolosText-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEBCE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

