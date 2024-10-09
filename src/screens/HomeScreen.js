import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rai YAtri</Text>
      <Text style={styles.subtitle}>Order Railway Food at Your Seat!</Text>
      
      {/* Navigation Options */}
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.navButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Menu Categories */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Menu Categories</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>🍛 Veg Meals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>🍗 Non-Veg Meals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>🍔 Snacks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>🍟 Fast Food</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>🍽️ Combo Meals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>🥤 Beverages</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Order History */}
      <View style={styles.historyContainer}>
        <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Login')}>
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
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  navButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
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
  },
  menuItem: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: '40%',
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyContainer: {
    marginVertical: 30,
    alignItems: 'center',
  },
  historyButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
  },
  historyText: {
    color: '#fff',
    fontSize: 18,
  },
});