import { useRoute } from '@react-navigation/core';
import React from 'react';
import { View, StyleSheet, Image, Text, FlatList} from 'react-native';
import CommentItem from '../component/CommentItem';
import InputField from '../component/InputField';

const users = [
	{
		name: "Amanda Cruise",
		email: "amanda.cruise@gmail.com",
		picture: require("../assets/girl.jpeg"),
		likes: 8,
		date: "May 22 2020 23:27:12",
		post: "Kimberly strikes again!",
	},
	{
		name: "John Craze",
		email: "john.craze@gmail.com",
		picture: require("../assets/drip.jpeg"),
		likes: 89,
		date: "May 22 2020 23:27:12",
		post: "This is not the time for complacencies!",
	},

	{
		name: "Uwa Ebuka",
		email: "ebuka.uwa@gmail.com",
		picture: require("../assets/ocean.jpeg"),
		likes: 77,
		date: "May 22 2020 23:27:12",
		post: "Look! What i found in my garage!",
	},
];

function DetailsScreen(props) {
    const route = useRoute()
    const renderItem = ({ item }) => (
			<CommentItem name={item.name} image={item.picture} subtext={item.email} comment={item.post}/>
		);
	return (
		<View>
			<Image style={styles.image} source={route.params.picture} />
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{route.params.post}</Text>
				<Text style={styles.subtitle}>{route.params.post}</Text>
			</View>
			<InputField />
			<View style={styles.userContainer}>
				<FlatList
					data={users}
					keyExtractor={(user) => user.email}
					renderItem={renderItem}
				/>
			</View>
		</View>
	);
}

export default DetailsScreen;
const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	title: {
		marginBottom: 7,
		fontFamily: "Avenir",
		fontSize: 24,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 18,
	},
	image: {
		width: "100%",
		height: 300,
	},
	view: {
		backgroundColor: "#f8f4f4",
	},
	userContainer: {
		//marginVertical: 40,
		backgroundColor: "linen",
	},
});
