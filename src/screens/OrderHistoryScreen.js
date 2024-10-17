import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function OrderHistoryScreen({ orderHistory }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      {orderHistory && orderHistory.length === 0 ? (
        <Text style={styles.emptyText}>No orders placed yet.</Text>
      ) : (
        <FlatList
          data={orderHistory}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <Text style={styles.orderDate}>{item.date}</Text>
              <FlatList
                data={item.items}
                keyExtractor={(orderItem) => orderItem.id.toString()}
                renderItem={({ item: orderItem }) => (
                  <View style={styles.itemRow}>
                    <Text style={styles.itemName}>{orderItem.name}</Text>
                    <Text style={styles.itemPrice}>₹{orderItem.price}</Text>
                  </View>
                )}
              />
              <Text style={styles.totalAmount}>Total: ₹{item.totalAmount}</Text>
              <Text style={styles.paymentMethod}>Payment: {item.paymentMethod}</Text>
              <Text style={styles.customerInfo}>Name: {item.name}</Text>
              <Text style={styles.customerInfo}>Address: {item.address}</Text>
              <Text style={styles.customerInfo}>Mobile: {item.mobile}</Text>
            </View>
          )}
        />
      )}
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
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  orderDate: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paymentMethod: {
    fontSize: 16,
    marginTop: 5,
  },
  customerInfo: {
    fontSize: 16,
    marginTop: 5,
    color: '#333',
  },
}); 