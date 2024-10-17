import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const { width, height } = Dimensions.get('window'); // Get the device width and height

  return (
    <ImageBackground
      // source={require('../../assets/g10.png')} // Replace with your background image path
      style={[styles.background, { width, height }]} // Set width and height dynamically
      resizeMode="stretch" // Ensures the image fills the screen while maintaining aspect ratio
    >
      <View style={styles.container}>
        <Image 
          source={require('../../assets/logo.png')} // Replace with your logo image path
          style={[styles.logo, { width: width * 0.8, height: height * 0.2 }]} // Responsive logo size
        />
        <Text style={styles.title}>Welcome to Rail Yatri!</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Add padding for smaller devices
  },
  logo: {
    resizeMode: 'contain', // Ensures the logo keeps its aspect ratio
    marginBottom: '10%', // Space between logo and title (relative to screen height)
  },
  title: {
    fontSize: 0.05 * Dimensions.get('window').height, // Dynamic font size based on height
    fontWeight: 'bold',
    color:'#007bff', 
    marginBottom: '5%', // Dynamic margin
    textAlign: 'center', // Center text for small devices
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40, // Adjust padding for better button size
    borderRadius: 10,
    marginBottom: 10,
    width: '80%', // Set button width to 80% of the screen width
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
