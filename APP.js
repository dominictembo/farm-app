import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ClientScreen from './ClientScreen';
import WorkerScreen from './WorkerScreen';
import AdminScreen from './AdminScreen';

const AppStack = createStackNavigator({
  Client: ClientScreen,
  Worker: WorkerScreen,
  Admin: AdminScreen,
});

const AppContainer = createAppContainer(AppStack);

const App = () => {
  return <AppContainer />;
};

export default App;
