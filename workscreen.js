import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const WorkerScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://your-api.com/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <View>
      <Text>Tasks</Text>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>{task.name}</Text>
          <Button title="Complete Task" onPress={() => console.log('Task completed')} />
        </View>
      ))}
    </View>
  );
};

export default WorkerScreen;
