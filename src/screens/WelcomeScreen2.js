import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import logo2 from '../../assets/background2.png';

const WelcomeScreen2 = () => {
  return (
    <View style={styles.container}>
      {/* Top Section with Image */}
      <Image
        source={logo2}
        style={styles.image}
      />

      {/* Tagline */}
      <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>Enjoy Restaurant Quality Meals at Home</Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <Text style={styles.footer}>Privacy Policy</Text>
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
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginTop: 50,
  },
  taglineContainer: {
    width: '100%', // Full width for spacing
    paddingHorizontal: 20, // Horizontal spacing
  },
  tagline: {
    fontSize: 20,  // Increased font size
    color: '#53E88B',  // Same green color
    textAlign: 'center', // Center the text within the container
  },
  button: {
    backgroundColor: '#53E88B',  // Same green color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,

  },
  buttonText: {
    color: '#fff',
    fontSize: 20,  // Increased font size
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 14,  // Slightly increased footer font size
    color: '#53E88B',  // Same green color

  },
});

export default WelcomeScreen2;
