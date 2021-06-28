import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../component/ListItem";

const users = [
	{
		name: "Amanda Cruise",
		email: "amanda.cruise@gmail.com",
		picture: require("../../assets/girl.jpeg"),
		likes: 8,
		date: "May 22 2020 23:27:12",
		post: "Kimberly strikes again!",
	},
	{
		name: "John Craze",
		email: "john.craze@gmail.com",
		picture: require("../../assets/drip.jpeg"),
		likes: 89,
		date: "May 22 2020 23:27:12",
		post: "This is not the time for complacencies!",
	},

	{
		name: "Uwa Ebuka",
		email: "ebuka.uwa@gmail.com",
		picture: require("../../assets/ocean.jpeg"),
		likes: 77,
		date: "May 22 2020 23:27:12",
		post: "Look! What i found in my garage!",
	},
];


function FeedsScreen(props) {
    const navigation = useNavigation()
	const renderItem = ({ item }) => (
		<ListItem
			image={item.picture}
			name={item.name}
			subtext={item.email}
			likes={item.likes}
			post={item.post}
			date={item.date}
            onPress={() => navigation.navigate('Details', item)}
		/>
	);
	return (
		<View style={styles.container}>
			<FlatList
				data={users}
				keyExtractor={(user) => user.email.toString()}
				renderItem={renderItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});

export default FeedsScreen;
