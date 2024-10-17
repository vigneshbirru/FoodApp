import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

export default function CheckoutScreen({ navigation ,route}) {
  const { cart, setOrderHistory } = route.params; // Get cart items and setOrderHistory from route parameters
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [TrainPNR, setTrainPNR] = useState('');
  const [SeatNo, setSeatNo] = useState('');
  const [isCODSelected, setIsCODSelected] = useState(false);

  const handleConfirmOrder = () => {
    // Validate input
    if (!name || !address || !mobile || !TrainPNR || !SeatNo){
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
      TrainPNR,  // Include TrainPNR in the order object
    };

    // Add the order to the order history
    setOrderHistory((prevOrders) => [...prevOrders, order]);

    // Show confirmation alert without navigation
    Alert.alert('Order Confirmed', 'Your order has been placed successfully! 🎉');
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
      <TextInput
        style={styles.input}
        placeholder="Train PNR No."
        value={TrainPNR}  // Correctly using TrainPNR state variable
        keyboardType="phone-pad"
        onChangeText={setTrainPNR}
      />
      <TextInput
        style={styles.input}
        placeholder="Seat No."
        value={SeatNo}  // Correctly using TrainPNR state variable
        keyboardType="phone-pad"
        onChangeText={setSeatNo}
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

      <TouchableOpacity style={styles.confirmButton}  onPress={() => navigation.navigate('SuccessfullScreen')}>
        <Text style={styles.confirmText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
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
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontWeight: '600',
  },
});
