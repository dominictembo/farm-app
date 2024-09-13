import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

const ClientScreen = () => {
  const [order, setOrder] = useState({});

  const handleOrder = async () => {
    try {
      const response = await axios.post('https://your-api.com/orders', order);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Place an Order</Text>
      <TextInput
        placeholder="Enter order details"
        value={order.details}
        onChangeText={(text) => setOrder({ ...order, details: text })}
      />
      <Button title="Submit Order" onPress={handleOrder} />
    </View>
  );
};

export default ClientScreen;
