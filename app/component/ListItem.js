import React from "react";
import { View, StyleSheet, ImageBackground, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({image, name, email, post, likes, date}) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={image} style={styles.icon} />
				<View style={styles.texts}>
					<Text>{name}</Text>
					<Text>{email}</Text>
				</View>
			</View>
			<View
				style={{
					width: "100%",
					height: 1,
					backgroundColor: "red",
					marginVertical: 15,
				}}
			/>
			<Image
				style={styles.background}
				source={image}
			/>

			<View>
				<Text style={styles.texts}>{post}</Text>
			</View>
			<View style={styles.like_header}>
				<View style={{ flexDirection: "row" }}>
					<MaterialCommunityIcons
						name='heart'
						size={22}
						color='tomato'
						style={styles.like_icon}
					/>
					<Text style={styles.texts}>{likes}</Text>
				</View>
				<Text style={{margin: 8 }}>{date}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 8,
	},
	background: {
		width: "100%",
		height: 250,
	},
	icon: {
		width: 50,
		height: 50,
		borderRadius: 30,
	},
	header: {
		flexDirection: "row",
		margin: 8,
	},
	like_header: {
		flexDirection: "row",
		margin: 8,
		justifyContent: "space-between",
	},
	texts: {
		margin: 8,
	},
	like_icon: {
		marginTop: 5,
	},
});

export default ListItem;
