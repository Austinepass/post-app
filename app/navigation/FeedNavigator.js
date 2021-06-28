import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "../screen/DetailsScreen";
import FeedsScreen from "../screen/FeedsScreen";



const Stack = createStackNavigator();
const FeedNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name='Feeds' component={FeedsScreen} />
		<Stack.Screen name='Details' component={DetailsScreen} />
	</Stack.Navigator>
);

export default FeedNavigator;