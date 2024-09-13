import React, { useState } from 'react';
import { View, Text, Button, TextInput, Picker } from 'react-native';

const FormScreen = () => {
  const [fields, setFields] = useState('');
  const [bedNumber, setBedNumber] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = async () => {
    try {
      // send form data to API or perform other actions
      console.log('Form submitted:', fields, bedNumber, weight);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Form</Text>
      <TextInput
        placeholder="Fields"
        value={fields}
        onChangeText={(text) => setFields(text)}
      />
      <Picker
        selectedValue={bedNumber}
        onValueChange={(itemValue) => setBedNumber(itemValue)}
      >
        <Picker.Item label="Bed 1" value="1" />
        <Picker.Item label="Bed 2" value="2" />
        <Picker.Item label="Bed 3" value="3" />
        {/* add more bed options as needed */}
      </Picker>
      <TextInput
        placeholder="Weight"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default FormScreen;
