import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')} // Replace with your background image path
      style={styles.background}
      resizeMode="stretch" // Ensures the image fills the screen while maintaining aspect ratio
    >
      <View style={styles.container}>
        <Image 
          source={require('../../assets/logo.png')} // Replace with your logo image path
          style={styles.logo} 
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
    // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: semi-transparent white overlay for readability
    // padding: 20,
    // borderRadius: 10,
  },
  logo: {
    width: 450, // Adjust the width as needed
    height: 160, // Adjust the height as needed
    marginBottom: 320, // Space between logo and title
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color:'#007bff', 
    marginTop: 200,
    padding:10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: 180,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
