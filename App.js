import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import WelcomeScreen2 from './src/screens/WelcomeScreen2';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignupSreen';

export default function App() {
  return (
    <View style={styles.container}>
     <WelcomeScreen/>
     {/* <WelcomeScreen2/> */}
     {/* <LoginScreen/> */}
     {/* <SignUpScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
