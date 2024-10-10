import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  const menuItems = [
    { id: 1, name: 'Veg Meals', price: 120, image: require('../../assets/veg-meal.jpg') },
    { id: 2, name: 'Non-Veg Meals', price: 150, image: require('../../assets/non-veg-meal.jpg') },
    { id: 3, name: 'Snacks', price: 50, image: require('../../assets/snacks.jpg') },
    { id: 4, name: 'Fast Food', price: 100, image: require('../../assets/fastfood.jpg') },
    { id: 5, name: 'Combo Meals', price: 200, image: require('../../assets/combo-meal.jpg') },
    { id: 6, name: 'Beverages', price: 40, image: require('../../assets/beverages.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rail Yatri</Text>
      <Text style={styles.subtitle}>Order Railway Food at Your Seat!</Text>

      {/* Scrollable Menu Categories */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Menu Categories</Text>
        {menuItems.map((item) => (
          <View key={item.id} style={styles.menuCard}>
            <Image source={item.image} style={styles.foodImage} />
            <Text style={styles.menuText}>{item.name}</Text>
            <Text style={styles.priceText}>₹{item.price}</Text>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Cart and Order History Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('CartScreen', { cart })}
        >
          <Text style={styles.cartText}>Go to Cart ({cart.length})</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.historyButton}
          onPress={() => navigation.navigate('OrderHistoryScreen')}
        >
          <Text style={styles.historyText}>View Order History</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
  scrollContainer: {
    marginVertical: 10,
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#007bff',
  },
  menuCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: '45%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  foodImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  priceText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  addToCartButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: '600',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  cartText: {
    color: '#fff',
    fontSize: 18,
  },
  historyButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  historyText: {
    color: '#fff',
    fontSize: 18,
  },
});
