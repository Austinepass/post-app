import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screen/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
	return (
		<Tab.Navigator tabBarOptions={{}}>
			<Tab.Screen
				name='Feed'
				component={FeedNavigator}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name='home' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Create'
				component={AccountScreen}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name='plus' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Account'
				component={AccountScreen}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name='account' size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
