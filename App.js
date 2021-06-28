import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Screen from './app/component/Screen';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
    <Screen>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </Screen>
  );
}
