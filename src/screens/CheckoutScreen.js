import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

export default function CheckoutScreen({ route, navigation }) {
  const { cart, setOrderHistory } = route.params; // Get cart items and setOrderHistory from route parameters
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [isCODSelected, setIsCODSelected] = useState(false);

  const handleConfirmOrder = () => {
    // Validate input
    if (!name || !address || !mobile) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Create the order
    const order = {
      id: Date.now(),
      items: cart,
      totalAmount: cart.reduce((acc, item) => acc + item.price, 0),
      paymentMethod: 'Cash on Delivery',
      date: new Date().toLocaleString(),
      name,
      address,
      mobile,
    };

    // Add the order to the order history
    setOrderHistory((prevOrders) => [...prevOrders, order]);

    // Show confirmation alert and navigate back to Home Screen
    Alert.alert('Order Confirmed', 'Your order has been placed successfully!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Home'), // Navigate back to Home Screen
      },
    ]);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.subTitle}>Total Amount: ₹{totalAmount}</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobile}
        keyboardType="phone-pad"
        onChangeText={setMobile}
      />

      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => {
          setIsCODSelected(!isCODSelected);
        }}
      >
        <Text style={styles.paymentText}>
          {isCODSelected ? '✅ Cash on Delivery' : 'Cash on Delivery'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
        <Text style={styles.confirmText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  paymentButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  paymentText: {
    color: '#fff',
    fontSize: 18,
  },
  confirmButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
