import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../../assets/g10.png';  // Replace with your logo image
import googleimage from '../../assets/google.png';
import facebookimage from '../../assets/facebook.png';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section with Logo */}
      <Image source={logo} style={styles.logo} />
      <Text style={styles.heading}>Waves Of Food</Text>

      {/* Sign Up Form */}
      <Text style={styles.signUpHeading}>Sign Up Here</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Email or Phone Number"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#aaa"
      />

      {/* Social Sign Up Section */}
      <Text style={styles.orText}>or</Text>
      <Text style={styles.continueText}>Sign Up With</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialInner}>
            <Image source={facebookimage} style={styles.socialIcon} />
            <Text style={styles.socialText}>Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialInner}>
            <Image source={googleimage} style={styles.socialIcon} />
            <Text style={styles.socialText}>Google</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <Text style={styles.footerText}>Already Have An Account?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 35,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#53E88B',  // Green color
  },
  signUpHeading: {
    fontSize: 20,
    marginTop: 20,
    color: '#53E88B',  // Green color
  },
  input: {
    width: 280, // Fixed width for input fields
    height: 45, // Fixed height for input fields
    borderWidth: 1,
    padding: 10,
    borderColor: '#53E88B',
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 8, // Reduced space between input fields
  },
  orText: {
    fontSize: 16,
    color: '#333',
  },
  continueText: {
    fontSize: 16,
    color: '#333',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '48%',
  },
  socialInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  socialIcon: {
    width: 20, // Set a width for the icon
    height: 20, // Set a height for the icon
    marginRight: 5, // Spacing between icon and text
  },
  socialText: {
    color: '#333',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#53E88B',  // Green color
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#333',
  },
});

export default SignUpScreen;
