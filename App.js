import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Screen from './app/component/Screen';
import ListItem from './app/component/ListItem';
import FeedsScreen from './app/screen/FeedsScreen';

const Comp = ({name}) => {
  return (
    <Text>{name}</Text>
  )
}
const Feeds = () => <Comp name='Feed' />
const Create = () => <Comp name='Create' />
const Account = () => <Comp name='Account' />

export default function App() {

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => {
    return (
			<Tab.Navigator>
				<Tab.Screen name='Feed' component={Feeds} />
				<Tab.Screen name='Create' component={Create} />
				<Tab.Screen name='Account' component={Account} />
			</Tab.Navigator>
		);
  }
  // return (
  //   <Screen>
  //     <NavigationContainer>
  //       <TabNavigator/>
  //     </NavigationContainer>
  //   </Screen>
  // );
   return (
			<Screen>
				<FeedsScreen/>
			</Screen>
		);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
