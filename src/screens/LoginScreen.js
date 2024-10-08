import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../../assets/g10.png';  // Replace with your logo image
import googleimage from '../../assets/google.png';
import facebookimage from '../../assets/facebook.png';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section with Logo */}
      <Image source={logo} style={styles.logo} />
      <Text style={styles.heading}>Waves Of Food</Text>
     
      {/* Login Form */}
      <Text style={styles.loginHeading}>Login To Your Account</Text>
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

      {/* Social Login Section */}
      <Text style={styles.orText}>or</Text>
      <Text style={styles.continueText}>Continue With</Text>
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

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <TouchableOpacity>
      <Text style={styles.footerText}>Don't Have Account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#53E88B',  // Green color
  },
  loginHeading: {
    fontSize: 18,
    marginTop: 25,
    color: '#53E88B',  // Green color
  },
  input: {
    width: 300, // Fixed width for both input fields
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#53E88B',
    borderRadius: 10,
    paddingLeft: 15,
    marginVertical: 10,
},

  orText: {
    // marginVertical: 20,
    fontSize: 16,
    color: '#333',
  },
  continueText: {
    marginVertical: 10,
    color:"#53E88B",
    fontSize: 16,
    color: '#333',
  },
  socialContainer: {
    flexDirection: 'row',
    alignContent:"center",
    justifyContent: "space-between",
    width: '75%',
    // backgroundColor: 'red',
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '40%',
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
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 25,

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: '#000',  // Green color
    marginTop: 20,
    bottom:0,
  },
  
});

export default LoginScreen;
