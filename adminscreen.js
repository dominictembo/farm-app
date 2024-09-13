import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const AdminScreen = () => {
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get('https://your-api.com/inventory');
        setInventory(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInventory();
  }, []);

  return (
    <View>
      <Text>Inventory</Text>
      <Text>Items: {inventory.items}</Text>
      <Text>Quantity: {inventory.quantity}</Text>
      <Button title="Update Inventory" onPress={() => console.log('Inventory updated')} />
    </View>
  );
};

export default AdminScreen;
