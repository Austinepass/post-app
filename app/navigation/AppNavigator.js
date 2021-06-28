import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screen/AccountScreen";
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Feed' component={FeedNavigator} />
			<Tab.Screen name='Create' component={AccountScreen} />
			<Tab.Screen name='Account' component={AccountScreen} />
		</Tab.Navigator>
	);
};

export default AppNavigator;
