import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SuccessfullScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Successful!</Text>
      <Text style={styles.message}>Your order has been placed successfully.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
});

export default SuccessfullScreen;