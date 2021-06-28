import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack";

import Screen from './app/component/Screen';
import FeedsScreen from './app/screen/FeedsScreen';
import AccountScreen from './app/screen/AccountScreen';
import DetailsScreen from './app/screen/DetailsScreen';

export default function App() {

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => {
    return (
			<Tab.Navigator>
				<Tab.Screen name='Feed' component={StackNavigator} />
				<Tab.Screen name='Create' component={DetailsScreen} />
				<Tab.Screen name='Account' component={AccountScreen} />
			</Tab.Navigator>
		);
  }


const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name='Feeds' component={FeedsScreen} />
		<Stack.Screen name='Details' component={DetailsScreen} />
	</Stack.Navigator>
);
  return (
    <Screen>
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
});
