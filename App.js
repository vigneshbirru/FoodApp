import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import SuccessfullScreen from './src/screens/SuccessfullScreen';

// Create Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <Stack.Screen name="SuccessfullScreen" component={SuccessfullScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
